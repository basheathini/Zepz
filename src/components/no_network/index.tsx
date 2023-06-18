import React from 'react';
import {StyledText} from '../global';
import {StyledContainer} from './styledComponents';

const NetworkConnectionError = ({}) => {
  return (
    <StyledContainer>
      <StyledText fontColor="red">No Network...</StyledText>
    </StyledContainer>
  );
};

export default NetworkConnectionError;
