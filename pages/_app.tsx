import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import { useRouter } from 'next/router';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';

import { AppThemeProvider } from '@/providers/AppThemeProvider';
import { RootContent } from '@/components/RootContent';

import activate from '../lingui/i18n';
import '../styles/globals.css';

export const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  useEffect(() => {
    // Activate the default locale on page load
    activate(locale || 'en');
  }, [locale]);

  return (
    <AppThemeProvider>
      <I18nProvider i18n={i18n}>
        <RootContent>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </RootContent>
      </I18nProvider>
    </AppThemeProvider>
  );
};

export default MyApp;
