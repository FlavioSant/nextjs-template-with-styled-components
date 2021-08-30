import { AppColorsTheme } from '../types/utils/colors';
import { TypographyTheme } from '../types/components/typography';

const breakpoints = ['@media(max-width: 1080px)', '@media(max-width: 720px)'];

const colors: AppColorsTheme = {
  light: {
    white: '#333333',
    background: '#ffffff',
  },
  dark: {
    white: '#ffffff',
    background: '#333333',
  },
};

const typography: TypographyTheme = {
  h1: {
    size: '2.25rem',
    weight: 600,
  },
  h2: {
    size: '1.5rem',
    weight: 600,
  },
  h3: {
    size: '1.25rem',
    weight: 600,
  },
  s1: {
    size: '1.1rem',
    weight: 500,
  },
  b1: {
    size: '1rem',
    weight: 600,
  },
  b2: {
    size: '1rem',
    weight: 500,
  },
  caption: {
    size: '0.9rem',
    weight: 500,
  },
};

const theme = {
  breakpoints,
  typography,
  colors,
};

export default theme;
