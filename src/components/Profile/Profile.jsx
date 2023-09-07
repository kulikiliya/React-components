import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledWrapper,
  StyledImgDiv,
  StyledUl,
  StyledList,
  StyledImg,
  StyledText,
} from './Profile.styles';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  console.log(stats);
  return (
    <StyledWrapper>
      <StyledImgDiv>
        <StyledImg src={avatar} alt="User avatar" />
        <StyledText>{username}</StyledText>
        <StyledText>{tag}</StyledText>
        <StyledText>{location}</StyledText>
      </StyledImgDiv>
      <StyledUl>
        <StyledList>
          <span>Followers</span>
          <span> {stats.followers}</span>
        </StyledList>
        <StyledList>
          <span>Views</span>
          <span> {stats.views}</span>
        </StyledList>
        <StyledList>
          <span>Likes</span>
          <span> {stats.likes}</span>
        </StyledList>
      </StyledUl>
    </StyledWrapper>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
