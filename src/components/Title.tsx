import { styled as muiStyled } from '@mui/system';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

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
