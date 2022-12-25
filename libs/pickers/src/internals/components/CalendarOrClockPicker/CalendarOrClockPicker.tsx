import { styled, useThemeProps } from '@mui/material/styles';
import { unstable_composeClasses as composeClasses } from '@mui/utils';
import { DIALOG_WIDTH, VIEW_HEIGHT } from 'src/internals/constants/dimensions';
import { PickerStatePickerProps } from 'src/internals/hooks/usePickerState';
import { DateOrTimeView, DateView, TimeView } from 'src/internals/models';
import { BasePickerProps } from 'src/internals/models/props/basePickerProps';
import { DateInputPropsLike } from '../wrappers/WrapperProps';
import { CalendarOrClockPickerClasses, getCalendarOrClockPickerUtilityClass } from './CalendarOrClockPickerClasses';

export interface CalendarOrClockPickerSlotsComponent {}

export interface CalendarOrClockPickerSlotsComponentsProps {}

export interface ExportedCalendarOrClockPickerProps<TDate>
  extends Omit<BasePickerProps<TDate | null>, 'value' | 'onChange'> {
  /**
   * Overrideable components.
   * @default {}
   */
  components?: CalendarOrClockPickerSlotsComponent;
  /**
   * The props used for each component slot.
   * @default {}
   */
  componentsProps?: CalendarOrClockPickerSlotsComponentsProps;
}

export interface CalendarOrClockPickerProps<TDate, TView extends DateOrTimeView>
  extends ExportedCalendarOrClockPickerProps<TDate>,
    PickerStatePickerProps<TDate | null, TView> {
  autoFocus?: boolean;
  DateInputProps: DateInputPropsLike;
  classes?: Partial<CalendarOrClockPickerClasses>;
}

const useUtilityClasses = (ownerState: CalendarOrClockPickerProps<any, any>) => {
  const { classes } = ownerState;
  const slots = { root: ['root'] };

  return composeClasses(slots, getCalendarOrClockPickerUtilityClass, classes);
};

const PickerRoot = styled('div', {
  name: 'ZenCalendarOrClockPicker',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root,
})(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const PickerViewRoot = styled('div')({
  overflowX: 'hidden',
  width: DIALOG_WIDTH,
  maxHeight: VIEW_HEIGHT,
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
});

const isDatePickerView = (view: DateOrTimeView): view is DateView =>
  view === 'year' || view === 'month' || view === 'day';

const isTimePickerView = (view: DateOrTimeView): view is TimeView => view === 'time';

export function CalendarOrClockPicker<TDate, TView extends DateOrTimeView>(
  inProps: CalendarOrClockPickerProps<TDate, TView>,
) {
  const props = useThemeProps({ props: inProps, name: 'ZenCalendarOrClockPicker' });

  const { openView } = props;

  const classes = useUtilityClasses(props);

  return (
    <PickerRoot className={classes.root}>
      <PickerViewRoot>
        {isDatePickerView(openView) && <></>}

        {isTimePickerView(openView) && <></>}
      </PickerViewRoot>
    </PickerRoot>
  );
}