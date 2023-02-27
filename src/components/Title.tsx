import { styled as muiStyled } from '@mui/system';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
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
  padding: 22px 17.5px;
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
  margin-top: 130px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const IndentationNext = styled(Box)<any>`
  margin-top: 130px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
    background: radial-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
    border-radius: 50%;
    width: 480px;
    height: 360px;
    margin-left: -400px;
    z-index: -1;
  }

  &::after {
    content: '';
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: translateZ(0);
    background: conic-gradient(
      from 180deg at 50% 50%,
      #16abff33 0deg,
      #0885ff33 55deg,
      #54d6ff33 120deg,
      #0071ff33 160deg,
      transparent 360deg
    );
    width: 240px;
    height: 180px;
    z-index: -1;
  }
`;

export const TitleDescription = styled(Typography)`
  color: #000000;
  margin: 0px 10px 0px 10px;
  opacity: 0.6;
  font-size: 0.9rem;
  line-height: 1.5;
  max-width: 29ch;
`;

export const TitleBo = styled(Box)<any>`
  &:hover {
    // padding: 1rem 1.2rem;
    border-radius: 12px;
    background-color: rgba(180, 185, 188, 0.3);
    // background-color: rgba(238, 240, 241, 0.5);
    box-shadow: 0px 2px 8px -1px #0000001a;
    // border: -1px solid rgba(131, 134, 135, 0.5);
    transition: background-color 800ms, box-shadow 800ms;
  }
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
