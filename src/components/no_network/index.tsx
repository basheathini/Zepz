import React from 'react';
import {StyledText} from '../global_styledComponents';
import {StyledContainer} from './styledComponents';

const NetworkConnectionError = ({}) => {
  return (
    <StyledContainer>
      <StyledText fontColor="red">No Network...</StyledText>
    </StyledContainer>
  );
};

export default NetworkConnectionError;
