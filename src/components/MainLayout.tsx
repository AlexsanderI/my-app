import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import {
  LinkStyle,
  Header,
  TextHeder,
  ButtonHedear,
  RightButtonHeder,
} from './NavMenu';

export function MainLayout({ children, title = 'home' }: any) {
  const NameButton = [
    {
      href: '/about',
      title: 'About',
    },
    {
      href: '/task/1',
      title: '1',
    },
    {
      href: '/task/2',
      title: '2',
    },
    {
      href: '/task/3',
      title: '3',
    },
    {
      href: '/task/4',
      title: '4',
    },
  ];

  const ClickButton = NameButton.map((button) => (
    <LinkStyle key={button.title} href={button.href}>
      <ButtonHedear>
        <TextHeder variant='h6'>{button.title}</TextHeder>
      </ButtonHedear>
    </LinkStyle>
  ));
  return (
    <>
      <Head>
        <title>next | {title}</title>
      </Head>
      <nav>
        <AppBar component='nav'>
          <Header>
            <LinkStyle href='/'>
              <ButtonHedear>
                <TextHeder variant='h6'>Next</TextHeder>
              </ButtonHedear>
            </LinkStyle>
            <RightButtonHeder>
              <Box>{ClickButton}</Box>
            </RightButtonHeder>
          </Header>
        </AppBar>
      </nav>
      <main>{children}</main>
    </>
  );
}
