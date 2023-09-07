import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledWrapper,
  StyledLines,
  StyledCollumn,
  StyledHead,
  StyledTitle,
} from './Transaction.styles';

export const TransactionHistory = ({ items }) => {
  return (
    <StyledWrapper>
      <StyledHead>
        <tr>
          <StyledTitle>Type</StyledTitle>
          <StyledTitle>Amount</StyledTitle>
          <StyledTitle>Currency</StyledTitle>
        </tr>
      </StyledHead>
      <tbody>
        {items.map((item, idx) => (
          <StyledLines $idx={idx} key={item.id}>
            <StyledCollumn>{item.type}</StyledCollumn>
            <StyledCollumn>{item.amount}</StyledCollumn>
            <StyledCollumn>{item.currency}</StyledCollumn>
          </StyledLines>
        ))}
      </tbody>
    </StyledWrapper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};
