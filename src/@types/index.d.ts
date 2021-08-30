import 'styled-components';

import { AppColors } from '../types/utils/colors';

declare module 'styled-components' {
  export interface DefaultTheme extends AppColors {}
}
