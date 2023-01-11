import { Color } from '@mui/material';

export type DesignSystemColor = Omit<Color, 'A100' | 'A200' | 'A400' | 'A700'>;
