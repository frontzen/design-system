import { Box, capitalize, Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Meta } from '@storybook/react';
import React, { PropsWithChildren } from 'react';
import { CloseSquare, User } from '../icons';
import { grey } from '../palette/colors';
import { TextField, TextFieldProps } from './TextField';

export default {
  title: 'Core/TextField',
} as Meta;

const colors = [
  { value: 'primary', label: 'رنگ اصلی' },
  { value: 'secondary', label: 'رنگ فرعی' },
  { value: 'error', label: 'رنگ خطا' },
  { value: 'success', label: 'رنگ موفقیت' },
  { value: 'warning', label: 'رنگ هشدار' },
] as const;

const sizes = [
  { value: 'small', label: 'کوچک' },
  { value: 'medium', label: 'متوسط' },
  { value: 'large', label: 'بزرگ' },
] as const;

const radiuses = [
  { value: 4, label: '4 پیکسل (پیشفرض)' },
  { value: 8, label: '8 پیکسل' },
  { value: 16, label: '16 پیکسل' },
  { value: 24, label: '24 پیکسل' },
] as const;

const states = [
  { value: 'disable', label: 'غیرفعال' },
  { value: 'warning', label: 'هشدار' },
  { value: 'error', label: 'خطا' },
] as const;

const adornments = [
  { value: 'start', label: 'در ابتدا' },
  { value: 'end', label: 'در انتها' },
  { value: 'both', label: 'هردو' },
] as const;

const TextFieldSizes: React.FC<
  TextFieldProps & { showMultiline?: boolean; showAdornment?: Partial<Record<'start' | 'end' | 'both', boolean>> }
> = ({ showMultiline = true, showAdornment = { start: true }, ...props }) => {
  return (
    <Stack direction="column" gap={3}>
      {sizes.map((size) => (
        <TextField
          fullWidth
          key={size.value}
          size={size.value}
          label="عنوان"
          placeholder="عنوان را وارد کنید"
          helperText={`ورودی سایز ${size.label}`}
          {...props}
        />
      ))}

      {showMultiline && (
        <>
          <Divider sx={{ mt: 6, mb: 2 }}>چند خطی</Divider>

          {sizes.map((size) => (
            <TextField
              fullWidth
              multiline
              minRows={2}
              key={size.value}
              size={size.value}
              label="عنوان"
              placeholder="عنوان را وارد کنید"
              helperText={`ورودی چندخطی سایز ${size.label}`}
              {...props}
            />
          ))}
        </>
      )}

      {showAdornment && (
        <>
          <Divider sx={{ mt: 6, mb: 2 }}>نشان دار</Divider>

          {showAdornment.start &&
            sizes.map((size) => (
              <TextField
                fullWidth
                minRows={2}
                label="عنوان"
                key={size.value}
                size={size.value}
                placeholder="عنوان را وارد کنید"
                helperText={`ورودی نشان دار سایز ${size.label}`}
                startAdornment={<User sx={{ color: '#757575' }} />}
                {...props}
              />
            ))}

          {showAdornment.end && (
            <>
              <Divider sx={{ mt: 6, mb: 2 }} />

              {sizes.map((size) => (
                <TextField
                  fullWidth
                  minRows={2}
                  label="عنوان"
                  key={size.value}
                  size={size.value}
                  placeholder="عنوان را وارد کنید"
                  helperText={`ورودی نشان دار سایز ${size.label}`}
                  endAdornment={<CloseSquare sx={{ color: '#757575' }} />}
                  {...props}
                />
              ))}
            </>
          )}

          {showAdornment.both && (
            <>
              <Divider variant="middle" sx={{ mt: 6, mb: 2 }} />

              {sizes.map((size) => (
                <TextField
                  fullWidth
                  minRows={2}
                  label="عنوان"
                  key={size.value}
                  size={size.value}
                  placeholder="عنوان را وارد کنید"
                  helperText={`ورودی نشان دار سایز ${size.label}`}
                  startAdornment={<User sx={{ color: '#757575' }} />}
                  endAdornment={<CloseSquare sx={{ color: '#757575' }} />}
                  {...props}
                />
              ))}
            </>
          )}
        </>
      )}
    </Stack>
  );
};

const CardWithTitle: React.FC<PropsWithChildren<{ title: React.ReactNode; helper?: string; bgColor?: string }>> = ({
  title,
  bgColor,
  children,
  helper = `به ترتیب: ${sizes.map((s) => s.label).join('، ')}`,
}) => {
  return (
    <Card variant="outlined" sx={{ backgroundColor: 'common.white' }}>
      <Typography
        p={2}
        variant="h5"
        fontWeight="bold"
        color={`common.white`}
        sx={{ backgroundColor: bgColor || 'teal.400' }}
      >
        {typeof title === 'string' ? capitalize(title) : title}

        {helper && (
          <Typography variant="body2" mt={1}>
            {helper}
          </Typography>
        )}
      </Typography>

      <CardContent sx={{ mt: 3 }}>{children}</CardContent>
    </Card>
  );
};

export const Colors = () => {
  return (
    <Grid2 container spacing={4}>
      {colors.map((color) => (
        <Grid2 xs={3} key={color.value}>
          <CardWithTitle title={color.label} bgColor={`${color.value}.main`}>
            <TextFieldSizes color={color.value} />
          </CardWithTitle>
        </Grid2>
      ))}
    </Grid2>
  );
};

export const Sizes = () => {
  return (
    <Grid2 container spacing={4}>
      <Grid2 xs={3}>
        <CardWithTitle title="sizes">
          <TextFieldSizes />
        </CardWithTitle>
      </Grid2>
    </Grid2>
  );
};

export const Radiuses = () => {
  return (
    <Box>
      <Grid2 container spacing={4}>
        {radiuses.map((radius) => (
          <Grid2 xs={3} key={radius.value}>
            <CardWithTitle title={radius.label}>
              <TextFieldSizes radius={radius.value} />
            </CardWithTitle>
          </Grid2>
        ))}
      </Grid2>

      <Divider textAlign="left" sx={{ mt: 16, mb: 8 }}>
        <Typography variant="h5">حالت radius در وضعیت‌های گوناگون ورودی</Typography>
      </Divider>

      <Grid2 container spacing={4}>
        {states.map((state) =>
          radiuses.map((radius) => (
            <Grid2 xs={3} key={state.value + radius.value}>
              <CardWithTitle
                title={`${state.label} - ${radius.label}`}
                bgColor={state.value === 'disable' ? grey[400] : `${state.value}.main`}
              >
                <TextFieldSizes
                  radius={radius.value}
                  error={state.value === 'error'}
                  warning={state.value === 'warning'}
                  disabled={state.value === 'disable'}
                  showAdornment={{ start: true, end: true, both: true }}
                />
              </CardWithTitle>
            </Grid2>
          )),
        )}
      </Grid2>
    </Box>
  );
};

export const States = () => {
  return (
    <Grid2 container spacing={4}>
      {states.map((state) => (
        <Grid2 xs={3} key={state.value}>
          <CardWithTitle title={state.label} bgColor={state.value === 'disable' ? grey[400] : `${state.value}.main`}>
            <TextFieldSizes
              error={state.value === 'error'}
              warning={state.value === 'warning'}
              disabled={state.value === 'disable'}
            />
          </CardWithTitle>
        </Grid2>
      ))}
    </Grid2>
  );
};

export const Adornments = () => {
  return (
    <Grid2 container spacing={4}>
      {adornments.map((state) => (
        <Grid2 xs={3} key={state.value}>
          <CardWithTitle title={state.label}>
            <TextFieldSizes
              showMultiline={false}
              {...(['start', 'both'].includes(state.value) && {
                startAdornment: <User sx={{ color: '#757575' }} />,
              })}
              {...(['end', 'both'].includes(state.value) && {
                endAdornment: <CloseSquare sx={{ color: '#757575' }} />,
              })}
            />
          </CardWithTitle>
        </Grid2>
      ))}
    </Grid2>
  );
};

export const HelperText = () => {
  return (
    <Box pb={12}>
      <Grid2 container spacing={4}>
        {(['with', 'without'] as const).map((state) => (
          <Grid2 xs={3} key={state}>
            <CardWithTitle title={`${state} helper text`}>
              <TextFieldSizes helperText={state === 'with' ? 'متن راهنمای کاربر' : ' '} />
            </CardWithTitle>
          </Grid2>
        ))}
      </Grid2>

      <Divider textAlign="left" sx={{ mt: 16, mb: 8 }}>
        <Typography variant="h5">حالت متن کمکی در وضعیت‌های گوناگون ورودی</Typography>
      </Divider>

      <States />
    </Box>
  );
};
