import {styled} from 'styled-components/native';

const StyledContainer = styled.TouchableOpacity<StyledCellProps>`
  margin: 10px 10px 0px 10px;
  border-radius: 10px;
  background-color: ${({disable}) => (disable ? 'grey' : 'white')};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 10px 15px 10px;
`;

const StyledUserImage = styled.Image`
  height: 90px;
  width: 90px;
  border-radius: 45px;
  margin-right: 15px;
`;

const StyledUserInfoContainer = styled.View`
  flex-direction: row;
`;

const StyledViewContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const StyledViewDetails = styled.View`
  flex-direction: column;
  margin-left: 10px;
  flex: 1;
`;

const StyledViewIcon = styled.View`
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  margin-right: 15px;
`;

const StyledReputationView = styled.View`
  flex-direction: column;
  margin-top: 5px;
  padding: 3px 0px 0px 0px;
`;

const StyledIconContainer = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
`;

const StyledExpandedContainer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

type StyledCellProps = {
  disable: boolean;
};

export {
  StyledContainer,
  StyledUserImage,
  StyledViewDetails,
  StyledReputationView,
  StyledIconContainer,
  StyledViewContainer,
  StyledExpandedContainer,
  StyledUserInfoContainer,
  StyledViewIcon,
};
