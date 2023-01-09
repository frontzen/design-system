import { Box, Divider, styled, Typography } from '@mui/material';
import { Meta } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Core/Checkbox',
} as Meta;
export const Basic = () => {
  const variants = [
    ['normal', 'خمیدگی 4'],
    ['curve', 'خمیدگی 8'],
    ['circle', 'خمیدگی 16'],
  ] as const;
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', width: 280 }}>
        <Wrapper>انتخاب نشده</Wrapper>
        <Wrapper>نامشخص</Wrapper>
        <Wrapper>انتخاب شده</Wrapper>
      </Box>
      {variants.map((variant) => (
        <Box display="flex" gap={2} key={variant[0]}>
          <Box sx={{ display: 'flex', width: 280, my: 2 }}>
            <Wrapper>
              <Checkbox radiusVariant={variant[0]} />
            </Wrapper>
            <Wrapper>
              <Checkbox radiusVariant={variant[0]} indeterminate />
            </Wrapper>
            <Wrapper>
              <Checkbox radiusVariant={variant[0]} defaultChecked />
            </Wrapper>
          </Box>
          <p>{variant[1]}</p>
        </Box>
      ))}
    </React.Fragment>
  );
};

export const Size = () => {
  const sizes = ['small', 'medium', 'large'] as const;
  const variants = ['normal', 'curve', 'circle'] as const;

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', width: 400 }}>
        <Wrapper>کوچک (16 * 16)</Wrapper>
        <Wrapper>متوسط (20 * 20)</Wrapper>
        <Wrapper>بزرگ (24 * 24)</Wrapper>
      </Box>
      {variants.map((variant) => (
        <React.Fragment key={variant}>
          <Box sx={{ display: 'flex', width: 400, my: 2 }}>
            {sizes.map((size) => (
              <Wrapper key={size}>
                <Checkbox radiusVariant={variant} size={size} />
              </Wrapper>
            ))}
          </Box>
          <Box sx={{ display: 'flex', width: 400, my: 2 }}>
            {sizes.map((size) => (
              <Wrapper key={size}>
                <Checkbox radiusVariant={variant} size={size} defaultChecked />
              </Wrapper>
            ))}
          </Box>
          <Box sx={{ display: 'flex', width: 400, my: 2 }}>
            {sizes.map((size) => (
              <Wrapper key={size}>
                <Checkbox radiusVariant={variant} size={size} indeterminate />
              </Wrapper>
            ))}
          </Box>
          <Divider sx={{ width: 400, my: 4 }} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export const Color = () => {
  const dictionary = {
    primary: 'اصلی',
    secondary: 'ثانویه',
  } as const;
  return (
    <>
      {(['primary', 'secondary'] as const).map((color) => (
        <React.Fragment key={color}>
          <Box sx={{ display: 'flex', mb: 2 }}>
            <span style={{ width: 70 }}>{dictionary[color]}</span>
            <Box sx={{ display: 'inline-flex', width: 200, justifyContent: 'space-between' }}>
              <Checkbox size="large" color={color} />
              <Checkbox size="large" color={color} indeterminate />
              <Checkbox size="large" color={color} defaultChecked />
            </Box>
          </Box>
        </React.Fragment>
      ))}
      <Typography variant="subtitle1">برای مشاهده رنگ هاور، موس را بر روی آیتم‌ها ببرید *</Typography>
    </>
  );
};

export const Disabled = () => {
  const variants = [
    ['normal', 'خمیدگی 4'],
    ['curve', 'خمیدگی 8'],
    ['circle', 'خمیدگی 16'],
  ] as const;
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', width: 280 }}>
        <Wrapper>انتخاب نشده</Wrapper>
        <Wrapper>نامشخص</Wrapper>
        <Wrapper>انتخاب شده</Wrapper>
      </Box>
      {variants.map((variant) => (
        <Box display="flex" gap={2} key={variant[0]}>
          <Box sx={{ display: 'flex', width: 280, my: 2 }}>
            <Wrapper>
              <Checkbox radiusVariant={variant[0]} size="large" disabled />
            </Wrapper>
            <Wrapper>
              <Checkbox radiusVariant={variant[0]} size="large" disabled indeterminate />
            </Wrapper>
            <Wrapper>
              <Checkbox radiusVariant={variant[0]} size="large" disabled checked />
            </Wrapper>
          </Box>
          <p>{variant[1]}</p>
        </Box>
      ))}
    </React.Fragment>
  );
};

const Wrapper = styled('div')({
  width: '33%',
  textAlign: 'center',
});
