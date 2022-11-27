import { LoadingButton as MuiLoadingButton, loadingButtonClasses, LoadingButtonProps } from '@mui/lab';
import { alpha } from '@mui/system';
import { DotLoader } from '../DotLoader';
import { getColorFromThemeWithColorProps } from '../utils';
import { buttonDisableAlpha } from './constants';

export const LoadingButton = (props: LoadingButtonProps) => {
  const { loadingIndicator = <DotLoader />, loadingPosition = 'center' } = props;
  return (
    <MuiLoadingButton
      sx={(theme) => ({
        ...(loadingPosition === 'center' && {
          //these classes are used to override default material behavior
          [`&&.${loadingButtonClasses.loading}`]: {
            // it's for hiding text
            color: 'transparent',
          },
          [`.${loadingButtonClasses.loadingIndicator}`]: {
            // it's for setting loadingIndicator color
            color: alpha(
              getColorFromThemeWithColorProps(theme, props, props.variant === 'outlined' ? 'main' : 'contrastText'),
              props.variant === 'outlined' ? buttonDisableAlpha : 1,
            ),
          },
        }),
      })}
      loadingPosition={loadingPosition}
      loadingIndicator={loadingIndicator}
      {...props}
    />
  );
};
