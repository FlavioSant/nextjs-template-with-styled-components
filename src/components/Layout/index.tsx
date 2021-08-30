import { AppTheme } from '../../types/utils/colors';

import { LayoutContainer } from './styles';

interface LayoutProps {
  appTheme: AppTheme;
  toggleAppTheme: () => void;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  appTheme,
  toggleAppTheme,
}) => (
  <LayoutContainer>
    {children}
    <button onClick={toggleAppTheme}>
      {appTheme === 'light' ? 'dark' : 'light'}
    </button>
  </LayoutContainer>
);
