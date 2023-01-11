import { Grid, Paper, Typography } from '@mui/material';
import { Meta } from '@storybook/react';

export default {
  title: 'Core/Shadows',
} as Meta;
export const All = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={8} borderRadius={8}>
        <Paper elevation={0} sx={{ padding: 2, display: 'flex', flexDirection: 'row' }}>
          <Typography variant="h5" sx={{ width: '33%' }}>
            Flat
          </Typography>
          <Typography variant="h5" sx={{ width: '33%' }}>
            0
          </Typography>
          <Typography variant="h5" sx={{ width: '33%' }}>
            none
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={8} borderRadius={8}>
        <Paper elevation={2} sx={{ padding: 2, display: 'flex', flexDirection: 'row' }}>
          <Typography variant="h5" sx={{ width: '33%' }}>
            Raised
          </Typography>
          <Typography variant="h5" sx={{ width: '33%' }}>
            2
          </Typography>
          <Typography variant="h5" sx={{ width: '33%' }}>
            0px 1px 2px 0px rgba(0,0,0,0.10)
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={8} borderRadius={8}>
        <Paper elevation={8} sx={{ padding: 2, display: 'flex', flexDirection: 'row' }}>
          <Typography variant="h5" sx={{ width: '33%' }}>
            Overlay
          </Typography>
          <Typography variant="h5" sx={{ width: '33%' }}>
            8
          </Typography>
          <Typography variant="h5" sx={{ width: '33%' }}>
            0px 4px 8px 0px rgba(0,0,0,0.10)
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={8} borderRadius={8}>
        <Paper elevation={12} sx={{ padding: 2, display: 'flex', flexDirection: 'row' }}>
          <Typography variant="h5" sx={{ width: '33%' }}>
            Sticky Nav
          </Typography>
          <Typography variant="h5" sx={{ width: '33%' }}>
            12
          </Typography>
          <Typography variant="h5" sx={{ width: '33%' }}>
            0px 6px 12px 0px rgba(0,0,0,0.10)
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={8} borderRadius={8}>
        <Paper elevation={16} sx={{ padding: 2, display: 'flex', flexDirection: 'row' }}>
          <Typography variant="h5" sx={{ width: '33%' }}>
            Temporary Nav
          </Typography>
          <Typography variant="h5" sx={{ width: '33%' }}>
            16
          </Typography>
          <Typography variant="h5" sx={{ width: '33%' }}>
            0px 8px 16px 0px rgba(0,0,0,0.10)
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={8} borderRadius={8}>
        <Paper elevation={24} sx={{ padding: 2, display: 'flex', flexDirection: 'row' }}>
          <Typography variant="h5" sx={{ width: '33%' }}>
            Pop out
          </Typography>
          <Typography variant="h5" sx={{ width: '33%' }}>
            24
          </Typography>
          <Typography variant="h5" sx={{ width: '33%' }}>
            0px 12px 24px 0px rgba(0,0,0,0.10)
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
