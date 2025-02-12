import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { Greenberry } from '@greenberry/icons';

const StyledGreenberry = styled(Greenberry)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledGreenberry />
    </Box>
  );
}
