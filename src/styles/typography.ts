import {scaleFont} from './mixins';

// FONT FAMILY
const FONT_FAMILY_REGULAR = 'Poppins-Regular';
const FONT_FAMILY_MEDIUM = 'Poppins-Medium';
const FONT_FAMILY_THIN = 'Poppins-Thin';
const FONT_FAMILY_LIGHT = 'Poppins-Light';
const FONT_FAMILY_BOLD = 'Poppins-Bold';
const FONT_FAMILY_SEMI_BOLD = 'Poppins-SemiBold';

export const fontFamily = {
  regular: FONT_FAMILY_REGULAR,
  medium: FONT_FAMILY_MEDIUM,
  thin: FONT_FAMILY_THIN,
  light: FONT_FAMILY_LIGHT,
  bold: FONT_FAMILY_BOLD,
  semiBold: FONT_FAMILY_SEMI_BOLD,
};

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

export const fontWeight = {
  regular: FONT_WEIGHT_REGULAR,
  bold: FONT_WEIGHT_BOLD,
};

// FONT SIZE
const FONT_SIZE_TINY = scaleFont(10);
const FONT_SIZE_SMALL = scaleFont(14);
const FONT_SIZE_MEDIUM = scaleFont(18);
const FONT_SIZE_LARGE = scaleFont(22);
const FONT_SIZE_BIG = scaleFont(30);
const FONT_SIZE_EXTRA_BIG = scaleFont(40);

export const fontSizes = {
  tiny: `${FONT_SIZE_TINY}px`,
  small: `${FONT_SIZE_SMALL}px`,
  medium: `${FONT_SIZE_MEDIUM}px`,
  large: `${FONT_SIZE_LARGE}px`,
  big: `${FONT_SIZE_BIG}px`,
  extraBig: `${FONT_SIZE_EXTRA_BIG}px`,
};

// LINE HEIGHT
export const LINE_HEIGHT_LARGE = scaleFont(36);
export const LINE_HEIGHT_MEDIUM = scaleFont(18);
export const LINE_HEIGHT_SMALL = scaleFont(16);

export const fontLineHeight = {
  large: LINE_HEIGHT_LARGE,
  medium: LINE_HEIGHT_MEDIUM,
  small: LINE_HEIGHT_SMALL,
};

export default {
  fontFamily,
  fontSizes,
  fontWeight,
  fontLineHeight,
};
