import React, { FC, ReactNode } from 'react';
import { jsx, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useAppTheme } from '@/providers/AppThemeProvider';

type RootContentProps = {
  children: ReactNode;
};

export const RootContent: FC<RootContentProps> = ({
  children,
}: RootContentProps) => {
  const { appTheme } = useAppTheme();

  return (
    <MuiThemeProvider theme={appTheme}>
      <EmotionThemeProvider theme={appTheme}>{children}</EmotionThemeProvider>
    </MuiThemeProvider>
  );
};

export default RootContent;
