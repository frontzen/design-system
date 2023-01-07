import { Box, IconButton } from '@mui/material';
import { Meta } from '@storybook/react';
import React from 'react';
import { PlusSquare } from '../icons';
import { Button } from './Button';
import { Fab } from './Fab';
import { LoadingButton } from './LoadingButton';

export default {
  title: 'Core/Button',
} as Meta;
export const Basic = () => {
  return (
    <>
      <Box sx={{ '& > span': { mx: 1, my: 'unset' }, display: 'flex', width: 280, justifyContent: 'space-between' }}>
        <span>هاور/فعال</span>
        <span>غیر فعال</span>
        <span>لودینگ</span>
      </Box>
      {(['contained', 'outlined', 'text'] as const).map((variant) => (
        <>
          <Box sx={{ '& > button': { m: 1 } }}>
            <Button variant={variant}>دکمه</Button>
            <Button variant={variant} disabled>
              دکمه
            </Button>
            <LoadingButton loading loadingPosition="center" variant={variant}>
              دکمه
            </LoadingButton>
          </Box>
        </>
      ))}
    </>
  );
};
export const Color = () => {
  const dictionary = {
    primary: 'اصلی',
    secondary: 'ثانویه',
    success: 'موفقیت',
    error: 'خطا',
  } as const;
  return (
    <>
      {(['primary', 'secondary', 'success', 'error'] as const).map((color) => (
        <>
          <Box sx={{ '& > button': { m: 1 } }}>
            <span style={{ width: 70, display: 'inline-block' }}>{dictionary[color]}</span>
            <Button variant="contained" color={color}>
              دکمه
            </Button>
            <Button variant="outlined" color={color}>
              دکمه
            </Button>
            <Button variant="text" color={color}>
              دکمه
            </Button>
            <Button variant="contained" color={color} disabled>
              دکمه
            </Button>
            <Button variant="outlined" color={color} disabled>
              دکمه
            </Button>
            <Button variant="text" color={color} disabled>
              دکمه
            </Button>
            <LoadingButton variant="contained" loading loadingPosition="center" color={color}>
              دکمه
            </LoadingButton>
            <LoadingButton variant="outlined" loading loadingPosition="center" color={color}>
              دکمه
            </LoadingButton>
            <LoadingButton variant="text" loading loadingPosition="center" color={color}>
              دکمه
            </LoadingButton>
          </Box>
        </>
      ))}
    </>
  );
};

export const Size = () => {
  const sizes = ['small', 'medium', 'large'] as const;
  return (
    <>
      <Box mt={2} sx={{ '& > button': { m: 1 } }}>
        {sizes.map((size) => (
          <Fab size={size} variant="circular">
            <PlusSquare fontSize={size} />
          </Fab>
        ))}
      </Box>
      <hr />
      <Box sx={{ '& > button': { m: 1 } }}>
        {sizes.map((size) => (
          <Button variant="contained" size={size}>
            دکمه
          </Button>
        ))}
      </Box>
      <hr />
      <Box sx={{ '& > button': { m: 1 } }}>
        {sizes.map((size) => (
          <Button variant="outlined" size={size}>
            دکمه
          </Button>
        ))}
      </Box>
      <hr />
      <Box sx={{ '& > button': { m: 1 } }}>
        {sizes.map((size) => (
          <Button variant="text" size={size}>
            دکمه
          </Button>
        ))}
      </Box>
      <hr />
      <Box mt={2} sx={{ '& > button': { m: 1 } }}>
        {sizes.map((size) => (
          <Button variant="contained" size={size} startIcon={<PlusSquare fontSize={'small'} />}>
            دکمه
          </Button>
        ))}
      </Box>
      <hr />
      <Box mt={2} sx={{ '& > button': { m: 1 } }}>
        {sizes.map((size) => (
          <Button variant="outlined" size={size} startIcon={<PlusSquare fontSize={size} />}>
            دکمه
          </Button>
        ))}
      </Box>
      <hr />
      <Box mt={2} sx={{ '& > button': { m: 1 } }}>
        {sizes.map((size) => (
          <Button variant="text" size={size} startIcon={<PlusSquare fontSize={size} />}>
            دکمه
          </Button>
        ))}
      </Box>
      <hr />
      <Box mt={2} sx={{ '& > button': { m: 1 } }}>
        {sizes.map((size) => (
          <LoadingButton
            size={size}
            loading
            loadingPosition="start"
            startIcon={<PlusSquare fontSize={size} />}
            variant="outlined"
          >
            صبر کنید
          </LoadingButton>
        ))}
      </Box>
      <hr />
    </>
  );
};
export const Outlined = () => {
  return (
    <>
      <Box sx={{ '& > button': { m: 1 } }}>
        <Button variant="outlined">دکمه</Button>
        <Button variant="outlined" startIcon={<PlusSquare />}>
          دکمه
        </Button>
        <Button variant="outlined" endIcon={<PlusSquare />}>
          دکمه
        </Button>
        <Fab size="large" variant="outlined">
          <PlusSquare />
        </Fab>
      </Box>
    </>
  );
};
export const Fill = () => {
  return (
    <>
      <Box sx={{ '& > button': { m: 1 } }}>
        <Button variant="contained">دکمه</Button>
        <Button variant="contained" startIcon={<PlusSquare />}>
          دکمه
        </Button>
        <Button variant="contained" endIcon={<PlusSquare />}>
          دکمه
        </Button>
        <Fab size="large" variant="circular">
          <PlusSquare />
        </Fab>
      </Box>
    </>
  );
};
export const Text = () => {
  return (
    <>
      <Box sx={{ '& > button': { m: 1 } }}>
        <Button variant="text">دکمه</Button>
        <Button variant="text" startIcon={<PlusSquare />}>
          دکمه
        </Button>
        <Button variant="text" endIcon={<PlusSquare />}>
          دکمه
        </Button>
        <IconButton size="large" color="primary">
          <PlusSquare />
        </IconButton>
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
      <Button disabled variant="outlined" endIcon={<PlusSquare />}>
        غیر فعال
      </Button>
      <Fab variant="outlined" disabled>
        <PlusSquare />
      </Fab>
      <Fab variant="circular" disabled>
        <PlusSquare />
      </Fab>
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
        <LoadingButton loading={loading} loadingPosition="end" endIcon={<PlusSquare />} variant="contained">
          صبر کنید
        </LoadingButton>
        <LoadingButton loading={loading} loadingPosition="start" startIcon={<PlusSquare />} variant="contained">
          صبر کنید
        </LoadingButton>
        <LoadingButton loading={loading} loadingPosition="start" startIcon={<PlusSquare />} variant="outlined">
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
    <Box sx={{ '& > button': { m: 1 } }}>
      <Fab size="large" variant="outlined">
        <PlusSquare />
      </Fab>
      <Fab size="large" variant="circular">
        <PlusSquare />
      </Fab>
      <IconButton size="large" color="primary">
        <PlusSquare />
      </IconButton>
    </Box>
  );
};
