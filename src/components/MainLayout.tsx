import Head from 'next/head';
// import LinkStyle from 'next/LinkStyle';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { LinkStyle } from './NavMenu';

export function MainLayout({ children, title = 'home' }: any) {
  return (
    <>
      <Head>
        <title>next | {title}</title>
      </Head>
      <nav>
        <AppBar component='nav'>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              pl: '20px',
              height: 70,
            }}
          >
            <LinkStyle href='/'>
              <Button sx={{ color: '#fff' }}>
                <Typography textTransform='uppercase' variant='h6'>
                  Next
                </Typography>
              </Button>
            </LinkStyle>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pr: '20px',
                textTransform: 'uppercase',
              }}
            >
              <Button sx={{ color: '#fff' }}>Hi</Button>

              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <LinkStyle href='/'>
                  <Button sx={{ color: '#fff' }}>
                    <Typography
                      // textDecoration=' none'
                      textTransform='uppercase'
                      variant='h6'
                    >
                      Home
                    </Typography>
                  </Button>
                </LinkStyle>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <LinkStyle href='/about'>
                  <Button sx={{ color: '#fff' }}>
                    {' '}
                    <Typography textTransform='uppercase' variant='h6'>
                      About
                    </Typography>
                  </Button>
                </LinkStyle>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <LinkStyle href='/task/1'>
                  <Button sx={{ color: '#fff' }}>
                    <Typography textTransform='uppercase' variant='h6'>
                      1
                    </Typography>
                  </Button>
                </LinkStyle>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <LinkStyle href='/task/2'>
                  <Button sx={{ color: '#fff' }}>
                    <Typography textTransform='uppercase' variant='h6'>
                      2
                    </Typography>
                  </Button>
                </LinkStyle>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <LinkStyle href='/task/3'>
                  <Button sx={{ color: '#fff' }}>
                    <Typography textTransform='uppercase' variant='h6'>
                      3
                    </Typography>
                  </Button>
                </LinkStyle>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <LinkStyle href='/task/4'>
                  <Button sx={{ color: '#fff' }}>
                    <Typography textTransform='uppercase' variant='h6'>
                      4
                    </Typography>
                  </Button>
                </LinkStyle>
              </Box>
            </Box>
          </Box>
        </AppBar>
      </nav>
      <main>{children}</main>
    </>
  );
}
