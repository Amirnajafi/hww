import {ifIphoneX} from 'react-native-iphone-x-helper';
import {windowHeight} from '../util';

export const Theme = {
  Colors: {
    Primary: '#4B8C57',
    Secondary: '#F7931A',
    lighGray: '#9b9b9b',
    Transparent: 'transparent',
    Black: '#252526',
    White: '#ffffff',
    danger: '#97212B',
    success: '#207F3E',
    error: '#CD5C5C',
  },

  Fonts: {
    Primary: 'Cascadia',
    PrimaryBold: 'Cascadia-bold',
  },

  FontSizes: {
    Time: 10,
    ExtraSmall: 12,
    Small: 14,
    Medium: 16,
    Large: 20,
    ExtraLarge: 24,
    XExtraLarge: 30,
  },

  Dimensions: {
    Small: 4,
    Medium: 8,
    Default: 16,
    Large: 32,
    ExtraLarge: 64,
    fullWidth: '100%',
    scrollViewHeigh: windowHeight - 126,
  },

  Height: {
    Small: 36,
    Medium: 44,
    Default: 50,
    Large: 90,
    Header: ifIphoneX(88, 64),
    Footer: 82,
  },

  SafeArea: {
    Top: ifIphoneX(44, 0),
    Bottom: ifIphoneX(34, 0),
  },

  Shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  sizes: {
    size0: 0,
    size1: 1,
    size2: 2,
    size3: 3.5,
    size4: 4,
    size6: 6,
    size8: 8,
    size10: 10,
    size12: 12,
    size13dfive: 13.5,
    size15: 15,
    size20: 20,
    size25: 25,
    size30: 30,
    size40: 40,
    size50: 50,
    size57: 57,
    size70: 70,
    size80: 80,
    size65: 65,
    size100: 100,
    size120: 120,
    size126: 126,
    size129: 129,
    size200: 200,
    size230: 220,
    size265: 265,
  },
};
