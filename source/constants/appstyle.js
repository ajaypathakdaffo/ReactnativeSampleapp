import {Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
console.log('SCREEN_WIDTH ->',SCREEN_WIDTH)
console.log('SCREEN_HEIGHT ->',SCREEN_HEIGHT)

const width = 320;
const height = 568;

export const spacingHorizontal = (size) => {
  return (SCREEN_WIDTH / width) * size;
};
export const spacingVertical = (size) => {
  return (SCREEN_HEIGHT / height) * size;
};
