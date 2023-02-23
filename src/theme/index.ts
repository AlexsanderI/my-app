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
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'colom',
          paddingTop: '80px',
          height: '100vh',
        },
      },
    },
  },
});
