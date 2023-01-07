import { Checkbox as MuiCheckbox, CheckboxProps } from '@mui/material';
import { Checked } from './Icons/Checked';
import { CircleChecked } from './Icons/CircleChecked';
import { CircleIndeterminate } from './Icons/CircleIndeterminate';
import { CircleUnselected } from './Icons/CircleUnselected';
import { CurveChecked } from './Icons/CurveChecked';
import { CurveIndeterminate } from './Icons/CurveIndeterminate';
import { CurveUnselected } from './Icons/CurveUnselected';
import { Indeterminate } from './Icons/Indeterminate';
import { Unselected } from './Icons/Unselected';

type CheckBoxIcon = Pick<CheckboxProps, 'icon' | 'checkedIcon' | 'indeterminateIcon'>;

export function Checkbox(props: CheckboxProps) {
  const { radiusVariant = 'normal', ...restProps } = props;

  const icons: Record<typeof radiusVariant, CheckBoxIcon> = {
    normal: {
      icon: <Unselected />,
      checkedIcon: <Checked />,
      indeterminateIcon: <Indeterminate />,
    },
    curve: {
      icon: <CurveUnselected />,
      checkedIcon: <CurveChecked />,
      indeterminateIcon: <CurveIndeterminate />,
    },
    circle: {
      icon: <CircleUnselected />,
      checkedIcon: <CircleChecked />,
      indeterminateIcon: <CircleIndeterminate />,
    },
  };

  return <MuiCheckbox {...restProps} {...icons[radiusVariant]} />;
}
