import {Platform, Dimensions, PixelRatio} from 'react-native';

const isAndroid = Platform.OS === 'android';
const isIos = Platform.OS === 'ios';

const scaledSize = Dimensions.get('window');

const {width, height} = scaledSize;

const screenSize = Math.sqrt(width * height) / 100;

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;

const scale = width / guidelineBaseWidth;

const scaleSize = (size: number): number => (width / guidelineBaseWidth) * size;

const scaleFont = (size: number): number => size * PixelRatio.getFontScale();

const normalize = (size: number): number => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export {
  isAndroid,
  isIos,
  screenSize,
  width,
  height,
  scaleSize,
  scaleFont,
  normalize,
};
