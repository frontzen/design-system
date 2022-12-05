import * as React from 'react';
import { PickersAdapterContext } from '../LocalizationProvider';
import { PickersAdapterContextValue } from '../LocalizationProvider/LocalizationProvider';

export const useLocalizationContext = <TDate>() => {
  const localization = React.useContext(PickersAdapterContext);

  if (localization === null) {
    throw new Error(
      [
        'FrontZen: Can not find the date and time pickers localization context.',
        'It looks like you forgot to wrap your component in LocalizationProvider',
      ].join('\n'),
    );
  }

  return localization as PickersAdapterContextValue<TDate>;
};

export const useUtils = <T>() => useLocalizationContext<T>().utils;
export const useDefaultDates = <T>() => useLocalizationContext<T>().defaultDates;
export const useLocaleText = <T>() => useLocalizationContext<T>().localeText;

export const useNow = <TDate>(): TDate => {
  const utils = useUtils<TDate>();
  const now = React.useMemo(() => utils.date()!, [utils]);

  return now;
};
