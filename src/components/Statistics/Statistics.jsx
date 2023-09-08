import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledUl,
  StyledPercentage,
  ListItem,
  StyledTitle,
} from './Statistic.styles';

export const Statistics = ({ stats, title }) => {
  return (
    <section>
      {/* <StyledTitle> {stats ? 'Upload stats' : ''}</StyledTitle> */}
      {stats && <StyledTitle>{title}</StyledTitle>}
      <StyledUl>
        {stats.map((item, idx) => (
          <ListItem $idx={idx} key={item.id}>
            <span>{item.label}</span>
            <StyledPercentage> {item.percentage}%</StyledPercentage>
          </ListItem>
        ))}
      </StyledUl>
    </section>
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
