import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTitle,
  StyledSpan,
  StyledWrapper,
  StyledUl,
  StyledList,
  StyledImg,
} from './FriendsList.styles';

export const FriendsList = ({ friends }) => {
  return (
    <StyledWrapper>
      <StyledTitle>Upload stats</StyledTitle>
      <StyledUl>
        {friends.map(item => (
          <StyledList key={item.id}>
            <StyledSpan $isOnline={item.isOnline}></StyledSpan>
            <StyledImg src={item.avatar} alt="User avatar" />
            <p>{item.name}</p>
          </StyledList>
        ))}
      </StyledUl>
    </StyledWrapper>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};
