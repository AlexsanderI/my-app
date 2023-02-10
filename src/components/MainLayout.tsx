import Head from 'next/head';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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
              pl: '20px',
              // height: 5,
            }}
          >
            <Typography textTransform='uppercase' variant='h6' sx={{ my: 2 }}>
              Next
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pr: '20px',
                textTransform: 'uppercase',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <Typography
                  textTransform='uppercase'
                  variant='h6'
                  sx={{ my: 2 }}
                >
                  <Link href='/about'>About</Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <Typography
                  textTransform='uppercase'
                  variant='h6'
                  sx={{ my: 2 }}
                >
                  <Link href='/'>Home</Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <Typography
                  textTransform='uppercase'
                  variant='h6'
                  sx={{ my: 2 }}
                >
                  <Link href='/task/1'>1</Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <Typography
                  textTransform='uppercase'
                  variant='h6'
                  sx={{ my: 2 }}
                >
                  <Link href='/task/2'>2</Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <Typography
                  textTransform='uppercase'
                  variant='h6'
                  sx={{ my: 2 }}
                >
                  <Link href='/task/3'>3</Link>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  pr: '20px',
                }}
              >
                <Typography
                  textTransform='uppercase'
                  variant='h6'
                  sx={{ my: 2 }}
                >
                  <Link href='/task/4'>4</Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </AppBar>
      </nav>
      <main>{children}</main>
    </>
  );
}
