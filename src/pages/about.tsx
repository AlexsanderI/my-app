import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import { MainLayout } from '@/components/MainLayout';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function About() {
  return (
    <>
      <MainLayout title='about'>
        {/* <AppBar component='nav'>
          <Box sx={{ display: 'flex' }}>
            <Typography variant='h6' sx={{ my: 2 }}>
              Next
            </Typography>

            <h1>About</h1>
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
        </AppBar> */}
        <Box mt={8}>
          <Typography variant='h6' sx={{ my: 2 }}>
            Welcom to Next.js
          </Typography>
        </Box>
        {/* <Box component='main' sx={{ p: 3 }}>
          <Typography variant='h6' sx={{ my: 2 }}>
            Welcom to Next.js
          </Typography>
        </Box> */}
      </MainLayout>
    </>
  );
}
