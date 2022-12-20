import { common as expectedCommon, defaultPalette } from '../colors';
import { createTheme } from './createTheme';

const { text: expectedText, disable: expectedDisabled, ...expectedSemantic } = defaultPalette;
const isSemantic = (val: string): val is keyof typeof expectedSemantic => val in expectedSemantic;

describe('createTheme', () => {
  it('should return default palette when passing no options', () => {
    const { palette } = createTheme();

    expect(palette.disabled).toBe(expectedDisabled);
    expect(palette.common).toMatchObject(expectedCommon);
    expect(palette.text).toMatchObject(expectedText);

    for (const [key, expected] of Object.entries(expectedSemantic)) {
      if (isSemantic(key)) {
        expect(palette[key].main).toBe(expected.main);
      }
    }
  });

  it.each<keyof typeof expectedSemantic>(['primary', 'secondary', 'success', 'error', 'warning'])(
    'should return the given value when passing the options',
    (name) => {
      const sample = '#000';
      const { palette } = createTheme({
        palette: {
          [name]: {
            main: sample,
          },
        },
      });

      expect(palette[name].main).toBe(sample);

      for (const [key, expected] of Object.entries(expectedSemantic)) {
        if (isSemantic(key) && key !== name) {
          expect(palette[key].main).toBe(expected.main);
        }
      }
    },
  );
});
