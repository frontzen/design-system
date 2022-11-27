import { Fab as MUIFab, FabProps } from '@mui/material';
export const Fab = (props: FabProps) => {
  const { color = 'primary' } = props;
  return <MUIFab color={color} {...props} />;
};
