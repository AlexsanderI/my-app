import { styled as muiStyled } from '@mui/system';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

import Image from 'next/image';

export const PageBackground = styled(Box)<any>``;

export const EditBackground = styled(Box)<any>`
display: flex;
/* border: 1px solid red; */
padding: 1rem;
background-color: rgba(238, 240, 241, 0.5);
border: 1px solid rgba(172, 175, 176, 0.3);
border-radius: 12px;
}
`;

export const Number = styled(Image)<any>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  padding: 25px 10px;
  margin-left: 16px;
  transform: translateZ(0);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0px 2px 8px -1px #0000001a;
`;

export const Title = styled(Typography)<any>`
  color: #000000;
  font-family: ui-monospace, Menlo, Monaco, monospace;
  font-size: 13.6px;
`;

export const TitleWeight = styled(Title)<any>`
  font-weight: 700;
`;

export const Indentation = styled(Box)<any>`
  margin-top: 160px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TitleDescription = styled(Typography)`
  color: #000000;
  margin: 0px 10px 0px 10px;
  opacity: 0.6;
  font-size: 0.9rem;
  line-height: 1.5;
  max-width: 30ch;
`;

export const TitleH2 = styled.h2<any>`
  position: relative;
  color: #000000;
  margin: 0;
  padding: 1rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
  // background-color: rgba(var(--callout-rgb), 0.5);
  // border: 1px solid rgba(var(--callout-border-rgb), 0.3);
  // border-radius: var(--border-radius);
`;
