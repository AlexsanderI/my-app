<h1>Hello Alex</h1>;
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import { MainLayout } from '@/components/MainLayout';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Alex() {
  return (
    <>
      <MainLayout title='alex'>
        <Box>
          <Typography sx={{ my: 2 }}>Alex</Typography>
        </Box>
      </MainLayout>
    </>
  );
}
