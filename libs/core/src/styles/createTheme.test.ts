import { palette as _palette } from '../palette/palette';
import { createTheme } from './createTheme';

describe('createTheme', () => {
  it('should return default palette when passing no options', () => {
    const { palette } = createTheme();
    const { background, common, text, ...colors } = _palette;

    expect(palette.text).toMatchObject(text!);
    expect(palette.common).toMatchObject(common!);
    expect(palette.background).toMatchObject(background!);

    Object.entries(colors).forEach(([key, value]) => {
      expect((palette as any)[key]).toMatchObject(value);
    });
  });
});
