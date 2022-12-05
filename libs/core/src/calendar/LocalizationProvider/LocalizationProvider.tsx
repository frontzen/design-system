import { DateIOFormats, IUtils } from '@date-io/core/IUtils';
import { useThemeProps } from '@mui/material/styles';
import { indexBy, pluck, prop } from 'ramda';
import * as React from 'react';
import { enUSDefaultLocaleText as DEFAULT_LOCALE_TEXT, PickersInputLocaleText, PickersLocaleText } from '../locales';

// @ts-ignore TDate in our codebase does not have the `ExtendableDateType` constraint.
export type PickersAdapter<TDate> = IUtils<TDate>;

export type CalendarAdapterObject<TDate> = {
  calendar: string;
  /** DateIO adapter class function */
  adapter: new (...args: any) => PickersAdapter<TDate>;
  /** Locale for the date library you are using */
  adapterLocale?: string | object;
};

export interface PickersAdapterContextValue<TDate> {
  defaultDates: {
    minDate: TDate;
    maxDate: TDate;
  };

  utils: PickersAdapter<TDate>;
  localeText: PickersLocaleText;
  calendars: string[];
  currentCalendar: string;
  changeCalendar: (value: string) => void;
  defaultMultiCalendar: boolean;
}

export const PickersAdapterContext = React.createContext<PickersAdapterContextValue<any> | null>(null);

export interface LocalizationProviderProps<TDate> {
  children?: React.ReactNode;
  /** Calendar options array to be available for the project
   *
   * first calendar in the array would be the default calendar
   */
  calendarOptions: CalendarAdapterObject<TDate>[];
  /** Formats that are used for any child pickers */
  dateFormats?: Partial<DateIOFormats>;
  /**
   * Locale for components texts
   */
  localeText?: PickersInputLocaleText;
  /** Default `multiCalendar` to be used for all date & date-time pickers in the children tree
   *  unless mentioned on the component itself */
  defaultMultiCalendar?: boolean;
}

export function LocalizationProvider<TDate>(inProps: LocalizationProviderProps<TDate>) {
  const { localeText: inLocaleText, ...otherInProps } = inProps;

  const props: LocalizationProviderProps<TDate> = useThemeProps({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: otherInProps,
    name: 'LocalizationProvider',
  });

  const { children, calendarOptions, dateFormats, defaultMultiCalendar = false, localeText: themeLocaleText } = props;

  const [calendars, calendarsWithAdapters] = React.useMemo(
    () => [pluck('calendar', calendarOptions), indexBy(prop('calendar'), calendarOptions)],
    [calendarOptions],
  );

  // calendars[0] is considered `defaultCalendar`
  const [currentCalendar, setCurrentCalendar] = React.useState(calendars[0]);

  const localeText = React.useMemo(
    () => ({ ...DEFAULT_LOCALE_TEXT, ...themeLocaleText, ...inLocaleText }),
    [themeLocaleText, inLocaleText],
  );

  const utils = React.useMemo(() => {
    const { adapter: Adapter, adapterLocale } = calendarsWithAdapters[currentCalendar];

    return new Adapter({ locale: adapterLocale, formats: dateFormats });
  }, [currentCalendar, calendarsWithAdapters, dateFormats]);

  const defaultDates: PickersAdapterContextValue<TDate>['defaultDates'] = React.useMemo(
    () => ({ minDate: utils.date('1900-01-01T00:00:00.000')!, maxDate: utils.date('2099-12-31T00:00:00.000')! }),
    [utils],
  );

  const contextValue: PickersAdapterContextValue<TDate> = React.useMemo(() => {
    return {
      utils,
      defaultDates,
      localeText,
      calendars,
      currentCalendar,
      changeCalendar: setCurrentCalendar,
      defaultMultiCalendar,
    };
  }, [defaultDates, utils, localeText, calendars, currentCalendar, defaultMultiCalendar]);

  return <PickersAdapterContext.Provider value={contextValue}>{children}</PickersAdapterContext.Provider>;
}
