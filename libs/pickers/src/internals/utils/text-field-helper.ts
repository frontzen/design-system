import { PickersAdapter } from 'src/LocalizationProvider';

export const getDisplayDate = <TDate>(utils: PickersAdapter<TDate>, date: TDate | null, inputFormat: string) => {
  return date === null || !utils.isValid(date) ? '' : utils.formatByString(date!, inputFormat);
};

const DEFAULT_REGEX = /[\d]/gi;
const MASK_USER_INPUT_SYMBOL = '_';
const staticDateWith2DigitTokens = '2019-11-21T22:30:00.000';
const staticDateWith1DigitTokens = '2019-01-01T09:00:00.000';

export function inferFormatPatterns(format: string, utils: PickersAdapter<any>, acceptRegex: RegExp = DEFAULT_REGEX) {
  const with1Digits = utils
    .formatByString(utils.date(staticDateWith1DigitTokens)!, format)
    .replace(acceptRegex, MASK_USER_INPUT_SYMBOL);

  const with2Digits = utils
    .formatByString(utils.date(staticDateWith2DigitTokens)!, format)
    .replace(acceptRegex, MASK_USER_INPUT_SYMBOL);

  return { with1Digits, with2Digits };
}

export function getMaskFromCurrentFormat(
  mask: string | undefined,
  format: string,
  utils: PickersAdapter<any>,
  acceptRegex: RegExp = DEFAULT_REGEX,
) {
  if (mask) return mask;

  const { with1Digits, with2Digits } = inferFormatPatterns(format, utils, acceptRegex);

  if (with1Digits === with2Digits) return with1Digits;

  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      [
        `Mask does not support numbers with variable length such as 'M'.`,
        `Either use numbers with fix length or disable mask feature with 'disableMaskedInput' prop`,
        `Falling down to uncontrolled no-mask input.`,
      ].join('\n'),
    );
  }
  return '';
}

export function checkMaskIsValidForCurrentFormat(
  mask: string,
  format: string,
  utils: PickersAdapter<any>,
  acceptRegex: RegExp = DEFAULT_REGEX,
) {
  if (!mask) return false;

  const { with1Digits, with2Digits } = inferFormatPatterns(format, utils, acceptRegex);

  const isMaskValid = with1Digits === with2Digits && mask === with1Digits;

  if (!isMaskValid && utils.lib !== 'luxon' && process.env.NODE_ENV !== 'production') {
    if (format.includes('MMM')) {
      console.warn(
        [
          `Mask does not support literals such as 'MMM'.`,
          `Either use numbers with fix length or disable mask feature with 'disableMaskedInput' prop`,
          `Falling down to uncontrolled no-mask input.`,
        ].join('\n'),
      );
    } else if (with2Digits && with1Digits !== with2Digits) {
      console.warn(
        [
          `Mask does not support numbers with variable length such as 'M'.`,
          `Either use numbers with fix length or disable mask feature with 'disableMaskedInput' prop`,
          `Falling down to uncontrolled no-mask input.`,
        ].join('\n'),
      );
    } else if (mask) {
      console.warn(
        [
          `The mask "${mask}" you passed is not valid for the format used ${format}.`,
          `Falling down to uncontrolled no-mask input.`,
        ].join('\n'),
      );
    }
  }

  return isMaskValid;
}

export const maskedDateFormatter =
  (mask: string, acceptRegexp: RegExp = DEFAULT_REGEX) =>
  (value: string) => {
    let outputCharIndex = 0;
    return value
      .split('')
      .map((char, inputCharIndex) => {
        acceptRegexp.lastIndex = 0;

        if (outputCharIndex > mask.length - 1) return '';

        const maskChar = mask[outputCharIndex];
        const nextMaskChar = mask[outputCharIndex + 1];

        const acceptedChar = acceptRegexp.test(char) ? char : '';
        const formattedChar = maskChar === MASK_USER_INPUT_SYMBOL ? acceptedChar : maskChar + acceptedChar;

        outputCharIndex += formattedChar.length;

        const isLastCharacter = inputCharIndex === value.length - 1;
        if (isLastCharacter && nextMaskChar && nextMaskChar !== MASK_USER_INPUT_SYMBOL) {
          // when cursor at the end of mask part (e.g. month) prerender next symbol "21" -> "21/"
          return formattedChar ? formattedChar + nextMaskChar : '';
        }

        return formattedChar;
      })
      .join('');
  };
