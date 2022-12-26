import { SlotComponentProps, useSlotProps } from '@mui/base/utils';
import {
  ClickAwayListener,
  Grow,
  Paper as MuiPaper,
  PaperProps as MuiPaperProps,
  Popper as MuiPopper,
  PopperPlacementType,
  PopperProps as MuiPopperProps,
  Unstable_TrapFocus as MuiTrapFocus,
  useThemeProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { TransitionProps as MuiTransitionProps } from '@mui/material/transitions';
import * as React from 'react';
import { PickerStateWrapperProps } from 'src/internals/hooks/usePickerState';
import { PickersActionBar, PickersActionBarAction } from 'src/PickersActionBar';
import { PickersSlotsComponent, PickersSlotsComponentsProps } from './wrappers/WrapperProps';

export interface PickersPopperSlotsComponent extends Pick<PickersSlotsComponent, 'ActionBar' | 'PaperContent'> {
  /**
   * Custom component for the paper rendered inside the picker's Popper.
   * @default PickersPopperPaper
   */
  PopperPaper?: React.JSXElementConstructor<MuiPaperProps>;
  /**
   * Custom component for the popper [Transition](https://mui.com/material-ui/transitions).
   * @default Grow from @mui/material
   */
  PopperTransition?: React.JSXElementConstructor<MuiTransitionProps>;
  /**
   * Custom component for the popper inside which the views are rendered on Popper.
   * @default Popper from @mui/material
   */
  Popper?: React.ElementType<MuiPopperProps>;
}

export interface PickersPopperSlotsComponentsProps
  extends Pick<PickersSlotsComponentsProps, 'actionBar' | 'paperContent'> {
  /**
   * Props passed down to the Popper [Paper](https://mui.com/material-ui/api/paper/) component.
   */
  popperPaper?: SlotComponentProps<
    typeof MuiPaper,
    {},
    PickerPopperProps & { placement: PopperPlacementType | undefined }
  >;
  /**
   * Props passed down to the Popper [Transition](https://mui.com/material-ui/transitions/) component.
   */
  popperTransition?: Partial<MuiTransitionProps>;
  /**
   * Props passed down to [Popper](https://mui.com/material-ui/api/popper/) component.
   */
  popper?: SlotComponentProps<typeof MuiPopper, {}, PickerPopperProps>;
}

export interface PickerPopperProps extends PickerStateWrapperProps {
  anchorEl: MuiPopperProps['anchorEl'];
  open: MuiPopperProps['open'];
  containerRef?: React.Ref<HTMLDivElement>;
  onBlur?: VoidFunction;
  children?: React.ReactNode;
  components?: PickersPopperSlotsComponent;
  componentsProps?: PickersPopperSlotsComponentsProps;
}

const PickersPopperRoot = styled(MuiPopper, {
  name: 'ZenPickersPopper',
  slot: 'Root',
  overridesResolver: (_, styles) => styles['root'],
})(({ theme }) => ({ zIndex: theme.zIndex.modal }));

const PickersPopperPaper = styled(MuiPaper, {
  name: 'ZenPickersPopper',
  slot: 'Paper',
  overridesResolver: (_, styles) => styles['paper'],
})<{ ownerState: PickerPopperProps & Pick<MuiPopperProps, 'placement'> }>(({ ownerState }) => ({
  transformOrigin: 'top center',
  outline: 0,
  ...(ownerState.placement === 'top' && {
    transformOrigin: 'bottom center',
  }),
}));

export function PickersPopper(inProps: PickerPopperProps) {
  const props = useThemeProps({ props: inProps, name: 'ZenPickersPopper' });
  const {
    anchorEl,
    children,
    containerRef = null,
    onBlur,
    onDismiss,
    onClear,
    onConfirm,
    open,
    components,
    componentsProps,
  } = props;

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (open && (e.key === 'Escape' || e.key === 'Esc')) {
        onDismiss();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onDismiss, open]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      // stop the propagation to avoid closing parent modal
      event.stopPropagation();
      onDismiss();
    }
  };

  const PaperContent = components?.PaperContent ?? React.Fragment;

  const Popper = components?.Popper ?? PickersPopperRoot;
  const popperProps = useSlotProps({
    elementType: Popper,
    externalSlotProps: componentsProps?.popper,
    additionalProps: {
      transition: true,
      role: 'dialog',
      open,
      anchorEl,
      onKeyDown: handleKeyDown,
    },
    ownerState: props,
  });

  const Transition = components?.PopperTransition ?? Grow;

  const Paper = components?.PopperPaper ?? PickersPopperPaper;
  const paperProps: MuiPaperProps = useSlotProps({
    elementType: Paper,
    externalSlotProps: componentsProps?.popperPaper,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
    },
    ownerState: {} as any, // Is overridden below to use `placement
  });

  const ActionBar = components?.ActionBar ?? PickersActionBar;
  const actionBarProps = useSlotProps({
    elementType: ActionBar,
    externalSlotProps: componentsProps?.actionBar,
    additionalProps: {
      onConfirm,
      onClear,
      actions: ['confirm', 'clear'] as PickersActionBarAction[],
    },
    ownerState: {},
  });

  return (
    <Popper {...popperProps}>
      {({ TransitionProps, placement }) => (
        <MuiTrapFocus open={open} disableAutoFocus disableRestoreFocus>
          <Transition {...TransitionProps} {...componentsProps?.popperTransition} tabIndex={-1}>
            <div>
              <ClickAwayListener onClickAway={onBlur ?? onDismiss} touchEvent="onTouchStart">
                <Paper {...paperProps} ownerState={{ ...props, placement }} ref={containerRef}>
                  <PaperContent {...componentsProps?.paperContent}>
                    {children}
                    <ActionBar {...actionBarProps} />
                  </PaperContent>
                </Paper>
              </ClickAwayListener>
            </div>
          </Transition>
        </MuiTrapFocus>
      )}
    </Popper>
  );
}
