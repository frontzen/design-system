import { Box, styled, Typography } from '@mui/material';
import { Meta } from '@storybook/react';
import React from 'react';
import { Radio } from '../mui';

export default {
  title: 'Core/Radio',
} as Meta;
export const Size = () => {
  const sizes = ['small', 'medium', 'large'] as const;

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', width: 280 }}>
        <Wrapper>کوچک</Wrapper>
        <Wrapper>متوسط</Wrapper>
        <Wrapper>بزرگ</Wrapper>
      </Box>
      <Box sx={{ display: 'flex', width: 280, my: 2 }}>
        {sizes.map((size) => (
          <Wrapper key={size}>
            <Radio size={size} />
          </Wrapper>
        ))}
      </Box>
    </React.Fragment>
  );
};

export const Color = () => {
  const dictionary = {
    primary: 'اصلی',
    secondary: 'ثانویه',
  } as const;
  return (
    <React.Fragment>
      {(['primary', 'secondary'] as const).map((color) => (
        <React.Fragment key={color}>
          <Box sx={{ display: 'flex', mb: 2 }}>
            <span style={{ width: 70 }}>{dictionary[color]}</span>
            <Box sx={{ display: 'inline-flex', width: 100, justifyContent: 'space-between' }}>
              <Radio size="large" color={color} />
              <Radio size="large" color={color} checked />
            </Box>
          </Box>
        </React.Fragment>
      ))}
      <Typography variant="subtitle1">برای مشاهده رنگ هاور موس را بر روی آیتم‌ها ببرید *</Typography>
    </React.Fragment>
  );
};

export const Disabled = () => {
  return (
    <Box sx={{ '& > span': { m: 1 } }}>
      <Radio size="large" disabled />
      <Radio size="large" disabled checked />
    </Box>
  );
};

const Wrapper = styled('div')({
  width: '33%',
  textAlign: 'center',
});
