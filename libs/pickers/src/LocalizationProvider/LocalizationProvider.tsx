import { IUtils } from '@date-io/core/IUtils';
import { useThemeProps } from '@mui/material/styles';
import { indexBy, pluck, prop } from 'ramda';
import * as React from 'react';
import { enUSLocaleText as DEFAULT_LOCALE_TEXT, PickersInputLocaleText, PickersLocaleText } from '../locales';

// @ts-ignore TDate in our codebase does not have the `ExtendableDateType` constraint.
export type PickersAdapter<TDate> = IUtils<TDate>;

export type CalendarAdapterObject<TDate> = {
  calendar: string;
  /** DateIO adapter instance */
  adapter: PickersAdapter<TDate>;
};

export interface PickersAdapterContextValue<TDate> {
  utils: PickersAdapter<TDate>;
  localeText: PickersLocaleText;
  calendars: string[];
  currentCalendar: string;
  changeCalendar: (value: string) => void;
}

export const PickersAdapterContext = React.createContext<PickersAdapterContextValue<any> | null>(null);

export interface LocalizationProviderProps<TDate> {
  children?: React.ReactNode;
  /** Calendar options array to be available for the project
   *
   * first calendar in the array would be the default calendar
   */
  calendarOptions: CalendarAdapterObject<TDate>[];
  /**
   * Locale for components texts
   */
  localeText?: PickersInputLocaleText;
}

export function LocalizationProvider<TDate>(inProps: LocalizationProviderProps<TDate>) {
  const { localeText: inLocaleText, ...otherInProps } = inProps;

  const props: LocalizationProviderProps<TDate> = useThemeProps({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: otherInProps,
    name: 'ZenLocalizationProvider',
  });

  const { children, calendarOptions, localeText: themeLocaleText } = props;

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

  const contextValue: PickersAdapterContextValue<TDate> = React.useMemo(
    () => ({
      utils: calendarsWithAdapters[currentCalendar].adapter,
      localeText,
      calendars,
      currentCalendar,
      changeCalendar: setCurrentCalendar,
    }),
    [localeText, calendars, currentCalendar, calendarsWithAdapters],
  );

  return <PickersAdapterContext.Provider value={contextValue}>{children}</PickersAdapterContext.Provider>;
}
