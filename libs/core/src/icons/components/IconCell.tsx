import { Grid, styled, Tooltip, Typography } from '@mui/material';

export const IconCell: React.FC<{ icon: React.ReactElement; name: string }> = ({ icon, name }) => {
  return (
    <Tooltip title={name} arrow enterDelay={500} enterNextDelay={500}>
      <Grid item textAlign="center" width="86px">
        {icon}
        <IconName>{name}</IconName>
      </Grid>
    </Tooltip>
  );
};

const IconName = styled((props: any) => <Typography variant="subtitle1" {...props} />)`
  overflow: hidden;
  white-space: noWrap;
  text-overflow: ellipsis;
  cursor: default;
`;
