import Button from '@mui/material/Button';
import DialogActions, { DialogActionsProps } from '@mui/material/DialogActions';
import { useLocaleText } from '../internals/hooks/useUtils';

export type PickersActionBarAction = 'clear' | 'confirm';

export interface PickersActionBarProps extends DialogActionsProps {
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default `['cancel', 'accept']` for mobile and `[]` for desktop
   */
  actions?: PickersActionBarAction[];
  onConfirm: () => void;
  onClear: () => void;
}

export function PickersActionBar(props: PickersActionBarProps) {
  const { onConfirm, onClear, actions, ...other } = props;

  const localeText = useLocaleText();

  if (actions == null || actions.length === 0) {
    return null;
  }

  const buttons = actions?.map((actionType) => {
    switch (actionType) {
      case 'clear':
        return (
          <Button data-mui-test="clear-action-button" onClick={onClear} key={actionType}>
            {localeText.clearButtonLabel}
          </Button>
        );
      case 'confirm':
        return (
          <Button onClick={onConfirm} key={actionType}>
            {localeText.confirmButtonLabel}
          </Button>
        );
      default:
        return null;
    }
  });

  return <DialogActions {...other}>{buttons}</DialogActions>;
}
