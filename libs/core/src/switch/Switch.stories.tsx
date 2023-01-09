import { Box, styled, Typography } from '@mui/material';
import { Meta } from '@storybook/react';
import React from 'react';
import { Switch } from '../mui';

export default {
  title: 'Core/Switch',
} as Meta;
export const Basic = () => {
  const variants = [
    ['outline', 'تایپ یک'],
    ['contain', 'تایپ دو'],
  ] as const;
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', width: 180, '& > div': { width: '50%', textAlign: 'center' } }}>
        <div>خاموش</div>
        <div>روشن</div>
      </Box>
      {variants.map((variant) => (
        <Box display="flex" gap={2} key={variant[0]}>
          <Box sx={{ display: 'flex', width: 180, my: 2, '& > div': { width: '50%', textAlign: 'center' } }}>
            <div>
              <Switch size="large" variant={variant[0]} />
            </div>
            <div>
              <Switch size="large" variant={variant[0]} defaultChecked />
            </div>
          </Box>
          <p>{variant[1]}</p>
        </Box>
      ))}
    </React.Fragment>
  );
};
export const Size = () => {
  const variants = [
    ['outline', 'تایپ یک'],
    ['contain', 'تایپ دو'],
  ] as const;
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 400 }}>
        <Wrapper>کوچک (32 * 16)</Wrapper>
        <Wrapper>متوسط (40 * 20)</Wrapper>
        <Wrapper>بزرگ (48 * 24)</Wrapper>
      </Box>
      {variants.map((variant) => (
        <Box key={variant[0]} display="flex" gap={2}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 400, my: 2 }}>
            <Wrapper>
              <Switch size="small" variant={variant[0]} />
            </Wrapper>
            <Wrapper>
              <Switch size="medium" variant={variant[0]} />
            </Wrapper>
            <Wrapper>
              <Switch size="large" variant={variant[0]} />
            </Wrapper>
          </Box>
          <p>{variant[1]}</p>
        </Box>
      ))}
    </React.Fragment>
  );
};
export const Color = () => {
  const dictionary = {
    primary: 'اصلی',
    secondary: 'ثانویه',
  } as const;
  const variants = ['outline', 'contain'] as const;
  return (
    <React.Fragment>
      {(['primary', 'secondary'] as const).map((color) => (
        <React.Fragment key={color}>
          <Box sx={{ '& > span': { m: 1 } }}>
            <span style={{ width: 70, display: 'inline-block' }}>{dictionary[color]}</span>
            {variants.map((variant) => (
              <React.Fragment key={variant}>
                <Switch size="large" color={color} variant={variant} />
                <Switch size="large" color={color} variant={variant} defaultChecked />
              </React.Fragment>
            ))}
          </Box>
        </React.Fragment>
      ))}
      <Typography marginTop={2} variant="subtitle1">
        برای مشاهده رنگ هاور، موس را بر روی آیتم‌ها ببرید *
      </Typography>
    </React.Fragment>
  );
};
export const Disabled = () => {
  const variants = [
    ['outline', 'تایپ یک'],
    ['contain', 'تایپ دو'],
  ] as const;
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', width: 180, '& > div': { width: '50%', textAlign: 'center' } }}>
        <div>خاموش</div>
        <div>روشن</div>
      </Box>
      {variants.map((variant) => (
        <Box display="flex" gap={2} key={variant[0]}>
          <Box sx={{ display: 'flex', width: 180, my: 2, '& > div': { width: '50%', textAlign: 'center' } }}>
            <div>
              <Switch size="large" variant={variant[0]} disabled />
            </div>
            <div>
              <Switch size="large" variant={variant[0]} checked disabled />
            </div>
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
