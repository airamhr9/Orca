import { createMuiTheme, CssBaseline,  ThemeProvider, useMediaQuery } from '@material-ui/core';
import React from 'react';
import NavDrawer from './components/NavDrawer';
import ImagePage from './components/ImagePage';
import { HashRouter, Route } from 'react-router-dom';
import ContainerPage from './components/ContainerPage';
import ContainerInspect from './components/ContainerInspect';
import ImageInspect from './components/ImageInspect';

function App() {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          background: {
            default: "#212121",
            paper: "#2A2A2A"
          },
          "divider": "#1A1A1A"
        },
      }),
    [prefersDarkMode],
  );


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <HashRouter>
      <NavDrawer/>
        <div>
          <Route path="/" exact component={ ContainerPage } />
          <Route path="/images" component={ ImagePage } />
          <Route path="/container_details" component={ ContainerInspect } />
          <Route path="/image_details" component={ ImageInspect } />
        </div>
    </HashRouter>
    </ThemeProvider>
  );
}

export default App;
