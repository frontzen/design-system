import { PickersPopperClassKey } from 'src/internals/components/pickersPopperClasses';

export interface PickersComponentNameToClassKey {
  ZenLocalizationProvider: never;
}

declare module '@mui/material/styles' {
  interface ComponentNameToClassKey extends PickersComponentNameToClassKey {
    ZenPickersPopper: PickersPopperClassKey;
  }
}
