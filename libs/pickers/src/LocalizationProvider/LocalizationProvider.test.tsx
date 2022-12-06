import { createTheme, ThemeProvider } from '@mui/material/styles';
import { render } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import * as React from 'react';
import { useLocalizationContext } from 'src/internals/useUtils';
import { vi } from 'vitest';
import {
  LocalizationProvider,
  LocalizationProviderProps,
  PickersAdapter,
  PickersAdapterContextValue,
} from './LocalizationProvider';

const DEFAULT_CALENDAR_OPTIONS: LocalizationProviderProps<any>['calendarOptions'] = [
  { calendar: 'persian', adapter: { lib: 'persian' } as PickersAdapter<any> },
  { calendar: 'gregorian', adapter: { lib: 'gregorian' } as PickersAdapter<any> },
];

function ContextListener({ onContextChange }: { onContextChange: (context: PickersAdapterContextValue<any>) => void }) {
  const context = useLocalizationContext();

  React.useEffect(() => {
    onContextChange(context);
  }, [onContextChange, context]);

  return null;
}

describe('LocalizationProvider', () => {
  it('its useContext should throw error when its provider is not used', () => {
    const { result } = renderHook(useLocalizationContext);
    expect(result.error).toBeDefined();
  });

  it('should get default localeText', () => {
    const spy = vi.fn<PickersAdapterContextValue<any>[]>();

    render(
      <LocalizationProvider calendarOptions={DEFAULT_CALENDAR_OPTIONS}>
        <ContextListener onContextChange={spy} />
      </LocalizationProvider>,
    );

    const localeText = spy.mock.lastCall?.[0].localeText;
    expect(localeText?.confirmButtonLabel).toBe('Confirm');
  });

  it('should get theme localeText', () => {
    const spy = vi.fn<PickersAdapterContextValue<any>[]>();

    const theme = createTheme({
      components: {
        ZenLocalizationProvider: {
          defaultProps: {
            localeText: { confirmButtonLabel: 'Accept' },
          },
        },
      },
    });

    render(
      <ThemeProvider theme={theme}>
        <LocalizationProvider calendarOptions={DEFAULT_CALENDAR_OPTIONS}>
          <ContextListener onContextChange={spy} />
        </LocalizationProvider>
      </ThemeProvider>,
    );

    const localeText = spy.mock.lastCall?.[0].localeText;
    expect(localeText?.confirmButtonLabel).toBe('Accept');
  });

  it('should prioritize localeText from props over theme', () => {
    const spy = vi.fn<PickersAdapterContextValue<any>[]>();

    const theme = createTheme({
      components: {
        ZenLocalizationProvider: {
          defaultProps: {
            localeText: { confirmButtonLabel: 'Accept' },
          },
        },
      },
    });

    render(
      <ThemeProvider theme={theme}>
        <LocalizationProvider calendarOptions={DEFAULT_CALENDAR_OPTIONS} localeText={{ confirmButtonLabel: 'Submit' }}>
          <ContextListener onContextChange={spy} />
        </LocalizationProvider>
      </ThemeProvider>,
    );

    const localeText = spy.mock.lastCall?.[0].localeText;
    expect(localeText?.confirmButtonLabel).toBe('Submit');
  });

  it('should change calendar correctly', () => {
    const spy = vi.fn<PickersAdapterContextValue<any>[]>();

    render(
      <LocalizationProvider calendarOptions={DEFAULT_CALENDAR_OPTIONS} localeText={{ confirmButtonLabel: 'Submit' }}>
        <ContextListener onContextChange={spy} />
      </LocalizationProvider>,
    );

    const context = spy.mock.lastCall?.[0]!;
    expect(context.calendars?.[0]).toBe('persian');
    expect(context.calendars?.[1]).toBe('gregorian');
    expect(context.currentCalendar).toBe('persian');
    expect(context.utils).toHaveProperty('lib', 'persian');

    act(() => {
      context.changeCalendar('gregorian');
    });

    const newContext = spy.mock.lastCall?.[0]!;
    expect(newContext.currentCalendar).toBe('gregorian');
    expect(newContext.utils).toHaveProperty('lib', 'gregorian');
  });
});
