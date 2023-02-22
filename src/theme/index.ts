import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fff000',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          height: '100vh',
        },
      },
    },
  },
});
