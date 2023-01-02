import { Table, TableBody, TableCell, TableHead, TableRow, TypographyProps } from '@mui/material';
import { Meta } from '@storybook/react';
import { Typography } from '../mui';

export default {
  title: 'Core/typography',
} as Meta;

export const TypographyStory = () => {
  return (
    <Table sx={{ fontFeatureSettings: 'none !important' }}>
      <TableHead>
        <TableRow>
          <TableCell />
          {['Text Size', 'Weights', 'Line-Height'].map((txt) => (
            <TableCell key={txt}>
              <Typography variant="h5">{txt}</Typography>
            </TableCell>
          ))}
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>
                <Typography sx={{ fontFeatureSettings: 'normal' }} {...cell} />
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const rows: TypographyProps[][] = [
  [
    { children: 'H1', variant: 'h1' },
    { children: '32px (2.25 rem)' },
    { children: 'ExtraBold' },
    { children: '1.5' },
    { children: 'برای تیترهای اصلی صفحات استفاده میشود' },
  ],
  [
    { children: 'H2', variant: 'h2' },
    { children: '24px (1.5 rem)' },
    { children: 'ExtraBold' },
    { children: '1.5' },
    { children: 'برای تیترهای فرعی صفحات استفاده میشود' },
  ],
  [{ children: 'H3', variant: 'h3' }, { children: '24px (1.5 rem)' }, { children: 'Regular' }, { children: '1.5' }, {}],
  [
    { children: 'H4', variant: 'h4' },
    { children: '18px (1.125 rem)' },
    { children: 'Bold' },
    { children: '1.5' },
    { children: 'نام گروه ها، عنوان های فرعی ...' },
  ],
  [{ children: 'H5', variant: 'h5' }, { children: '16px (1 rem)' }, { children: 'Bold' }, { children: '1.5' }, {}],
  [
    { children: 'Button', variant: 'button' },
    { children: '16px (1 rem)' },
    { children: 'Medium' },
    { children: '1.25' },
    { children: 'متن داخلی دکمه ها' },
  ],
  [
    { children: 'Body 1', variant: 'body1' },
    { children: '16px (1 rem)' },
    { children: 'Regular' },
    { children: '1.75' },
    { children: 'متن درون پاراگراف ها' },
  ],
  [
    { children: 'Body 2', variant: 'body2' },
    { children: '14px (0.875 rem)' },
    { children: 'Regular' },
    { children: '1.75' },
    {},
  ],
  [
    { children: 'Caption', variant: 'caption' },
    { children: '12px (0.75 rem)' },
    { children: 'Regular' },
    { children: '1.5' },
    {},
  ],
  [
    { children: 'Subtext', variant: 'subtitle1' },
    { children: '10px (0.625 rem)' },
    { children: 'Medium' },
    { children: '1.5' },
    {},
  ],
];
