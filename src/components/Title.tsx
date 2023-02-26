import { styled as muiStyled } from '@mui/system';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Title = styled.h1<any>`
  color: red;
`;

export const Indentation = styled(Box)<any>`
  margin-top: 160px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
