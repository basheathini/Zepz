import React, {FC, useState} from 'react';
import {User} from '../types';
import DownArrow from '../assets/icons/DownArrow';
import UpArrow from '../assets/icons/UpArrow';
import {StyledButton, StyledText} from './global_styledComponents';
import {useDispatch} from 'react-redux';
import {followUser, blockUser} from '../redux/actions';
import {
  StyledContainer,
  StyledExpandedContainer,
  StyledIconContainer,
  StyledReputationView,
  StyledUserImage,
  StyledUserInfoContainer,
  StyledViewContainer,
  StyledViewDetails,
  StyledViewIcon,
} from './user_card/styledComponents';

export interface UserSectionProps {
  user: User;
}

const UserSection: FC<UserSectionProps> = ({user}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dispatch = useDispatch();
  //updated list of followed users and blocked users
  //const connections = useSelector((state: any) => state.following);

  const follow = () => {
    dispatch(followUser(user));
  };

  const block = () => {
    dispatch(blockUser(user));
  };

  const isExpanded = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <StyledContainer>
      <StyledViewContainer>
        <StyledUserInfoContainer>
          <StyledUserImage
            source={{
              uri: user.profile_image,
            }}
          />

          <StyledViewDetails>
            <StyledText fontSize="18px">{user.display_name}</StyledText>
            <StyledText fontSize="10px" fontWeight="400">
              {user.location}
            </StyledText>
            <StyledReputationView>
              <StyledText fontSize="12px" fontWeight="600">
                Reputation
              </StyledText>
              <StyledText fontSize="10px" fontWeight="400">
                {user.reputation}
              </StyledText>
            </StyledReputationView>
          </StyledViewDetails>

          <StyledViewIcon>
            <StyledIconContainer onPress={() => isExpanded()}>
              {isCollapsed && (
                <UpArrow
                  size={46}
                  color={'#18786C'}
                  hasBackgroundColor={false}
                />
              )}

              {!isCollapsed && (
                <DownArrow
                  size={46}
                  color={'#18786C'}
                  hasBackgroundColor={false}
                />
              )}
            </StyledIconContainer>
          </StyledViewIcon>
        </StyledUserInfoContainer>
      </StyledViewContainer>

      {isCollapsed && (
        <StyledExpandedContainer>
          <StyledButton
            onPress={() => follow()}
            color={'green'}
            title="Follow"
            fontSize="1px"
          />
          <StyledButton onPress={() => block()} color={'red'} title="Block" />
        </StyledExpandedContainer>
      )}
    </StyledContainer>
  );
};

export default UserSection;
