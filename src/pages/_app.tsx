import type { AppProps /*, AppContext */ } from 'next/app';
import React, { useEffect } from 'react';

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import {
  ThemeProvider as MaterialUIThemeProvider,
  StylesProvider,
} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import '../styles/globals.css';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  // Remove the server-side injected CSS.(https://material-ui.com/guides/server-rendering/)
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <StylesProvider injectFirst>
      <MaterialUIThemeProvider theme={theme}>
        <StyledComponentsThemeProvider theme={theme}>
          <CssBaseline />
          <AppHeader></AppHeader>
          <Container maxWidth="sm">
            <div className="g-spacer"></div>
            <Component {...pageProps} />
          </Container>
          <AppFooter></AppFooter>
        </StyledComponentsThemeProvider>
      </MaterialUIThemeProvider>
    </StylesProvider>
  );
};

export default MyApp;
