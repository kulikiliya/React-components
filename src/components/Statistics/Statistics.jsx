import React from 'react';
import PropTypes from 'prop-types';
import { StyledUl, StyledPercentage, ListItem } from './Statistic.styles';

export const Statistics = ({ stats }) => {
  return (
    <StyledUl>
      {stats.map((item, idx) => (
        <ListItem $idx={idx} key={item.id}>
          <span>{item.label}</span>
          <StyledPercentage> {item.percentage}%</StyledPercentage>
        </ListItem>
      ))}
    </StyledUl>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

// Statistics.propTypes = {
//   id: PropTypes.string,
//   label: PropTypes.string,
//   percentage: PropTypes.number,
// };
