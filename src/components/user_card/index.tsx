import React, {FC, useState} from 'react';
import {User} from '../../types';
import DownArrow from '../../assets/icons/DownArrow';
import UpArrow from '../../assets/icons/UpArrow';
import {StyledButton, StyledText} from '../global';
import {useDispatch, useSelector} from 'react-redux';
import {followUser, blockUser, unfollowUser} from '../../redux/actions';
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
} from './styledComponents';

type UserSectionProps = {
  user: User;
}

const UserSection: FC<UserSectionProps> = ({user}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const dispatch = useDispatch();
  const connections = useSelector((state: any) => state.following);
  const isFollowing = connections.following.includes(user.account_id);
  const isBlocked = connections.blocked.includes(user.account_id);
  const showFollowing = isFollowing ? 'Unfollow' : 'Follow';

  const follow = () => {
    if (!isFollowing) {
      dispatch(followUser(user.account_id));
    } else {
      dispatch(unfollowUser(user.account_id));
    }
  };

  const block = () => {
    dispatch(blockUser(user.account_id));
    setIsCollapsed(false);
  };

  const isExpanded = () => {
    setIsCollapsed(!isCollapsed);
  };

  const viewFullProfile = () => {

    console.log('viewFullProfile', user)
  }

  return (
    <StyledContainer onPress={() => viewFullProfile()} disable={isBlocked}>
      <StyledViewContainer>
        <StyledUserInfoContainer>
          <StyledUserImage
            source={{
              uri: user.profile_image,
            }}
          />

          <StyledViewDetails>
            <StyledText fontSize="18px">{user.display_name}</StyledText>
            {isFollowing && (
              <StyledText fontSize="10px" fontColor="green" fontWeight="400">
                Following
              </StyledText>
            )}
            {isBlocked && (
              <StyledText fontSize="10px" fontColor="red" fontWeight="400">
                Blocked
              </StyledText>
            )}
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
            <StyledIconContainer
              onPress={() => (!isBlocked ? isExpanded() : null)}>
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
            title={showFollowing}
            fontSize="1px"
          />
          <StyledButton onPress={() => block()} color={'red'} title="Block" />
        </StyledExpandedContainer>
      )}
    </StyledContainer>
  );
};

export default UserSection;
