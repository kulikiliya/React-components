import styled from 'styled-components';

export const StyledWrapper = styled.table`
  margin-top: 50px;
  background-color: white;
  border: 1px solid grey;
  font-size: 26px;
  line-height: 1.5;
  width: 1200px;
`;

export const StyledLines = styled.tr`
  border: 1px solid grey;

  background: ${props => (props.$idx % 2 === 0 ? '#f5f5dc' : '#cfe2f3')};
`;

export const StyledCollumn = styled.td`
  width: 400px;
  padding-top: 5px;
  padding-bottom: 5px;

  text-align: center;
  font-size: 24px;
  text-transform: capitalize;
`;

export const StyledHead = styled.thead`
  background-color: #c0c0ff;
`;

export const StyledTitle = styled.th`
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
`;
