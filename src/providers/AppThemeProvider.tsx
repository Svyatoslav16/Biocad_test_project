import {
  createContext, useContext, useMemo, useState,
} from 'react';

import { createTheme, Theme } from '@mui/material';

export const initialAppTheme = createTheme({
  name: 'custom',
  palette: {
    text: {
      primary: '#0C204D',
    },
    primary: { main: '#0C204D', lightGrey: '#FAFAFB' },
    icon: { lightGrey: '#FAFAFB' },
    border: {
      grey: '#E8E8EC',
      lightGrey2: '#F4F4F4',
      blue: '#0067BB',
    },
    background: {
      blue: '#0067BB',
      cyan: '#78E6D0',
      red: '#FA6469',
      violet: '#402985',
    },
  },
} as any);

type AppTheme = {
  appTheme: Theme;
};

type AppThemeProviderProps = {
  children: React.ReactNode;
};

const AppThemeContext = createContext<AppTheme>({
  appTheme: initialAppTheme,
});

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}: AppThemeProviderProps) => {
  const [appTheme] = useState<Theme>(initialAppTheme);
  const context = useMemo(() => ({ appTheme }), []);

  return (
    <AppThemeContext.Provider value={context}>
      {children}
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const { appTheme } = useContext(AppThemeContext);

  return { appTheme };
};
