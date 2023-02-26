import { styled as muiStyled } from '@mui/system';
import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';

export const EditBackground = styled(Box)<any>`
 display: flex;
 border: 1px solid red;
    padding: 1rem;
}
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
