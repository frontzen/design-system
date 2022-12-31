import { Grid, Paper } from '@mui/material';
import { Meta } from '@storybook/react';

export default {
  title: 'Core/Shadows',
} as Meta;
export const All = () => {
  return (
    <Grid container spacing={4}>
      <Grid item>
        <Paper elevation={0} sx={{ padding: 2 }}>
          Elevation: 0 (Flat)
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={2} sx={{ padding: 2 }}>
          Elevation: 2 (Raised)
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={8} sx={{ padding: 2 }}>
          Elevation: 8 (Overlay)
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={12} sx={{ padding: 2 }}>
          Elevation: 12 (Sticky Nav)
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={16} sx={{ padding: 2 }}>
          Elevation: 16 (Temporary Nav)
        </Paper>
      </Grid>
      <Grid item>
        <Paper elevation={24} sx={{ padding: 2 }}>
          Elevation: 24 (Pop out)
        </Paper>
      </Grid>
    </Grid>
  );
};
