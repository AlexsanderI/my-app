import styled from '@emotion/styled';
import Link from 'next/link';
import { Box } from '@mui/system';
import { Typography, Button } from '@mui/material';

export const Header = styled(Box)<any>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  height: 70px;
`;

export const TextHeder = styled(Typography)<any>`
  text-transform: uppercace;
  color: #fff;
`;

export const ButtonHedear = styled(Button)<any>`
  &:hover {
    border-radius: 12px;
    background-color: rgba(180, 185, 188, 0.3);
    box-shadow: 0px 2px 8px -1px #0000001a;
    transition: background-color 800ms, box-shadow 800ms;
  }
`;

export const RightButtonHeder = styled(Button)<any>`
  display: flex;
  justify-content: space-between;
  padding-right: 20px;
`;

export const LinkStyle = styled(Link)<any>`
  text-decoration: none;
`;
