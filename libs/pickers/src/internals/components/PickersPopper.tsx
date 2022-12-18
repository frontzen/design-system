import { SlotComponentProps, useSlotProps } from '@mui/base/utils';
import {
  ClickAwayListener,
  Grow,
  Paper as MuiPaper,
  PaperProps as MuiPaperProps,
  Popper as MuiPopper,
  PopperPlacementType,
  PopperProps as MuiPopperProps,
  useThemeProps,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { TransitionProps as MuiTransitionProps } from '@mui/material/transitions';
import MuiTrapFocus, { TrapFocusProps as MuiTrapFocusProps } from '@mui/material/Unstable_TrapFocus';
import { unstable_composeClasses as composeClasses } from '@mui/utils';
import * as React from 'react';
import { PickerStateWrapperProps } from 'src/internals/hooks/usePickerState';
import { PickersActionBar } from 'src/PickersActionBar';
import { getPickersPopperUtilityClass, PickersPopperClasses } from './pickersPopperClasses';
import { PickersSlotsComponent, PickersSlotsComponentsProps } from './wrappers/WrapperProps';

export interface PickersPopperSlotsComponent extends Pick<PickersSlotsComponent, 'ActionBar' | 'PaperContent'> {
  /**
   * Custom component for the paper rendered inside the desktop picker's Popper.
   * @default PickersPopperPaper
   */
  DesktopPaper?: React.JSXElementConstructor<MuiPaperProps>;
  /**
   * Custom component for the desktop popper [Transition](https://mui.com/material-ui/transitions).
   * @default Grow from @mui/material
   */
  DesktopTransition?: React.JSXElementConstructor<MuiTransitionProps>;
  /**
   * Custom component for trapping the focus inside the views on desktop.
   * @default TrapFocus from @mui/material
   */
  DesktopTrapFocus?: React.ElementType<MuiTrapFocusProps>;
  /**
   * Custom component for the popper inside which the views are rendered on desktop.
   * @default Popper from @mui/material
   */
  Popper?: React.ElementType<MuiPopperProps>;
}

export interface PickersPopperSlotsComponentsProps
  extends Pick<PickersSlotsComponentsProps, 'actionBar' | 'paperContent'> {
  /**
   * Props passed down to the desktop [Paper](https://mui.com/material-ui/api/paper/) component.
   */
  desktopPaper?: SlotComponentProps<
    typeof MuiPaper,
    {},
    PickerPopperProps & { placement: PopperPlacementType | undefined }
  >;
  /**
   * Props passed down to the desktop [Transition](https://mui.com/material-ui/transitions/) component.
   */
  desktopTransition?: Partial<MuiTransitionProps>;
  /**
   * Props passed down to the [TrapFocus](https://mui.com/base/react-focus-trap/) component on desktop.
   */
  desktopTrapFocus?: Partial<MuiTrapFocusProps>;
  /**
   * Props passed down to [Popper](https://mui.com/material-ui/api/popper/) component.
   */
  popper?: SlotComponentProps<typeof MuiPopper, {}, PickerPopperProps>;
}

const useUtilityClasses = (ownerState: PickerPopperProps) => {
  const { classes } = ownerState;

  const slots = {
    root: ['root'],
    paper: ['paper'],
  };

  return composeClasses(slots, getPickersPopperUtilityClass, classes);
};

export interface PickerPopperProps extends PickerStateWrapperProps {
  role: 'tooltip' | 'dialog';
  anchorEl: MuiPopperProps['anchorEl'];
  open: MuiPopperProps['open'];
  containerRef?: React.Ref<HTMLDivElement>;
  children?: React.ReactNode;
  onBlur?: () => void;
  components?: PickersPopperSlotsComponent;
  componentsProps?: PickersPopperSlotsComponentsProps;
  classes?: Partial<PickersPopperClasses>;
  shouldRestoreFocus?: () => boolean;
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
    role,
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

  const classes = useUtilityClasses(props);

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
      role,
      open,
      anchorEl,
      onKeyDown: handleKeyDown,
    },
    className: classes.root,
    ownerState: props,
  });

  const TrapFocus = components?.DesktopTrapFocus ?? MuiTrapFocus;
  const Transition = components?.DesktopTransition ?? Grow;

  const Paper = components?.DesktopPaper ?? PickersPopperPaper;
  const paperProps: MuiPaperProps = useSlotProps({
    elementType: Paper,
    externalSlotProps: componentsProps?.desktopPaper,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
    },
    className: classes.paper,
    ownerState: {} as any, // Is overridden below to use `placement
  });

  const ActionBar = components?.ActionBar ?? PickersActionBar;
  const actionBarProps = useSlotProps({
    elementType: ActionBar,
    externalSlotProps: componentsProps?.actionBar,
    additionalProps: {
      onConfirm,
      onClear,
      actions: [],
    },
    ownerState: {},
  });

  return (
    <Popper {...popperProps}>
      {({ TransitionProps, placement }) => (
        <TrapFocus
          open={open}
          disableAutoFocus
          // pickers are managing focus position manually
          // without this prop the focus is returned to the button before `aria-label` is updated
          // which would force screen readers to read too old label
          disableRestoreFocus
          disableEnforceFocus={role === 'tooltip'}
          isEnabled={() => true}
          {...componentsProps?.desktopTrapFocus}
        >
          <Transition {...TransitionProps} {...componentsProps?.desktopTransition}>
            <ClickAwayListener onClickAway={onBlur ?? onDismiss} touchEvent="onTouchStart">
              <Paper {...paperProps} ownerState={{ ...props, placement }} ref={containerRef}>
                <PaperContent {...componentsProps?.paperContent}>
                  {children}
                  <ActionBar {...actionBarProps} />
                </PaperContent>
              </Paper>
            </ClickAwayListener>
          </Transition>
        </TrapFocus>
      )}
    </Popper>
  );
}
