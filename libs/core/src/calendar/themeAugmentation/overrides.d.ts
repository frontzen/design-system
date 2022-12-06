export interface PickersComponentNameToClassKey {
  ZenLocalizationProvider: never;
}

declare module '@mui/material/styles' {
  interface ComponentNameToClassKey extends PickersComponentNameToClassKey {}
}
