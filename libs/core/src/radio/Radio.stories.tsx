import { Box, RadioGroup, styled, Typography } from '@mui/material';
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
      <RadioGroup defaultValue="small" sx={{ width: 280, my: 2, flexDirection: 'row' }}>
        {sizes.map((size) => (
          <Wrapper key={size}>
            <Radio value={size} size={size} />
          </Wrapper>
        ))}
      </RadioGroup>
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
            <RadioGroup defaultValue="a" sx={{ flexDirection: 'row', gap: 4 }}>
              <Radio size="large" value="a" color={color} />
              <Radio size="large" value="b" color={color} defaultChecked />
            </RadioGroup>
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
