import SaveIcon from '@mui/icons-material/Save';
import { Box } from '@mui/material';
import { Meta } from '@storybook/react';
import React from 'react';
import { PlusSquare } from '../icons';
import { Button } from './Button';
import { Fab } from './Fab';
import { LoadingButton } from './LoadingButton';

export default {
  title: 'Core/Button',
} as Meta;
export const Fill = () => {
  return (
    <>
      <Box sx={{ '& > button': { m: 1 } }}>
        <h3>Medium</h3>
        <Button variant="contained">دکمه</Button>
        <Button variant="contained" color="secondary">
          دکمه
        </Button>
        <Button variant="contained" color="success">
          دکمه
        </Button>
      </Box>
      <hr />
      <Box mt={2} sx={{ '& > button': { m: 1 } }}>
        <h3>Small</h3>
        <Button size="small" variant="contained">
          دکمه
        </Button>
        <Button size="small" variant="contained" color="secondary">
          دکمه
        </Button>
        <Button size="small" variant="contained" color="success">
          دکمه
        </Button>
      </Box>
      <hr />
      <Box mt={2} sx={{ '& > button': { m: 1 } }}>
        <h3>Large</h3>
        <Button size="large" variant="contained">
          دکمه
        </Button>
        <Button size="large" variant="contained" color="secondary">
          دکمه
        </Button>
        <Button size="large" variant="contained" color="success">
          دکمه
        </Button>
      </Box>
    </>
  );
};

export const FillButtonWithIcon = () => {
  return (
    <>
      <Box sx={{ '& > button': { m: 1 } }}>
        <h3>Medium</h3>
        <Button variant="contained" endIcon={<PlusSquare />}>
          دکمه
        </Button>
        <Button variant="contained" startIcon={<PlusSquare />}>
          دکمه
        </Button>
      </Box>
      <hr />
      <Box mt={2} sx={{ '& > button': { m: 1 } }}>
        <h3>Small</h3>
        <Button size="small" variant="contained" endIcon={<PlusSquare fontSize="small" />}>
          دکمه
        </Button>
        <Button size="small" variant="contained" startIcon={<PlusSquare fontSize="small" />}>
          دکمه
        </Button>
      </Box>
      <hr />
      <Box mt={2} sx={{ '& > button': { m: 1 } }}>
        <h3>Large</h3>
        <Button size="large" variant="contained" endIcon={<PlusSquare fontSize="large" />}>
          دکمه
        </Button>
        <Button size="large" variant="contained" startIcon={<PlusSquare fontSize="large" />}>
          دکمه
        </Button>
      </Box>
    </>
  );
};
export const Outlined = () => {
  return (
    <>
      <Box sx={{ '& > button': { m: 1 } }}>
        <h3>Medium</h3>
        <Button variant="outlined">دکمه</Button>
        <Button variant="outlined" color="secondary">
          دکمه
        </Button>
        <Button variant="outlined" color="success">
          دکمه
        </Button>
      </Box>
      <hr />
      <Box mt={2} sx={{ '& > button': { m: 1 } }}>
        <h3>Small</h3>
        <Button size="small" variant="outlined">
          دکمه
        </Button>
        <Button size="small" variant="outlined" color="secondary">
          دکمه
        </Button>
        <Button size="small" variant="outlined" color="success">
          دکمه
        </Button>
      </Box>
      <hr />
      <Box mt={2} sx={{ '& > button': { m: 1 } }}>
        <h3>Large</h3>
        <Button size="large" variant="outlined">
          دکمه
        </Button>
        <Button size="large" variant="outlined" color="secondary">
          دکمه
        </Button>
        <Button size="large" variant="outlined" color="success">
          دکمه
        </Button>
      </Box>
    </>
  );
};

export const OutlinedButtonWithIcon = () => {
  return (
    <>
      <Box sx={{ '& > button': { m: 1 } }}>
        <h3>Medium</h3>
        <Button variant="outlined" endIcon={<PlusSquare />}>
          دکمه
        </Button>
        <Button variant="outlined" startIcon={<PlusSquare />}>
          دکمه
        </Button>
      </Box>
      <hr />
      <Box mt={2} sx={{ '& > button': { m: 1 } }}>
        <h3>Small</h3>
        <Button size="small" variant="outlined" endIcon={<PlusSquare fontSize="small" />}>
          دکمه
        </Button>
        <Button size="small" variant="outlined" startIcon={<PlusSquare fontSize="small" />}>
          دکمه
        </Button>
      </Box>
      <hr />
      <Box mt={2} sx={{ '& > button': { m: 1 } }}>
        <h3>Large</h3>
        <Button size="large" variant="outlined" endIcon={<PlusSquare fontSize="large" />}>
          دکمه
        </Button>
        <Button size="large" variant="outlined" startIcon={<PlusSquare fontSize="large" />}>
          دکمه
        </Button>
      </Box>
    </>
  );
};
export const Disabled = () => {
  return (
    <Box sx={{ '& > button': { m: 1 } }}>
      <Button disabled variant="contained">
        غیر فعال
      </Button>
      <Button disabled variant="outlined">
        غیر فعال
      </Button>
    </Box>
  );
};

export const Loading = () => {
  const [loading, setLoading] = React.useState(false);

  return (
    <>
      <Button sx={{ mb: 2 }} size="small" color="secondary" variant="contained" onClick={() => setLoading((l) => !l)}>
        Toggle Loading
      </Button>
      <br />
      <Box sx={{ '& > button': { m: 1 } }}>
        <LoadingButton loading={loading} variant="contained">
          صبر کنید
        </LoadingButton>
        <LoadingButton loading={loading} loadingPosition="end" endIcon={<SaveIcon />} variant="contained">
          صبر کنید
        </LoadingButton>
        <LoadingButton loading={loading} loadingPosition="start" startIcon={<SaveIcon />} variant="contained">
          صبر کنید
        </LoadingButton>
        <LoadingButton loading={loading} loadingPosition="start" startIcon={<SaveIcon />} variant="outlined">
          صبر کنید
        </LoadingButton>
        <LoadingButton loading={loading} loadingPosition="center" variant="outlined">
          صبر کنید
        </LoadingButton>
      </Box>
    </>
  );
};

export const Icon = () => {
  return (
    <Fab variant="extended">
      <SaveIcon />
    </Fab>
  );
};
