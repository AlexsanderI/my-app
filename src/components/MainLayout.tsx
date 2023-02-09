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
          <Box sx={{ display: 'flex' }}>
            <Typography variant='h6' sx={{ my: 2 }}>
              Next
            </Typography>
            <Link href='/about'>
              <h1>About</h1>
            </Link>

            <Link href='/'>Hi</Link>
            <Link href='/task/1'>
              <p>
                <button>1</button>
              </p>
            </Link>
            <Link href='/task/2'>
              <p>
                <button>2</button>
              </p>
            </Link>
            <Link href='/task/3'>
              <p>
                <button>3</button>
              </p>
            </Link>
            <Link href='/task/4'>
              <p>
                <button>4</button>
              </p>
            </Link>
          </Box>
        </AppBar>
      </nav>
      <main>{children}</main>
    </>
  );
}
