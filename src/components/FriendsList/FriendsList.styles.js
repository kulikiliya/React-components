import styled from 'styled-components';

export const StyledTitle = styled.h2`
  margin-top: 0;
  text-align: center;
  border-bottom: 1px solid black;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #9fddc2;
`;

export const StyledSpan = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => (props.$isOnline ? '#66ff66' : '#f44336')};
`;

export const StyledWrapper = styled.div`
  background-color: whitesmoke;
  width: 500px;
  font-size: 26px;
  line-height: 1.5;
  border: 1px solid grey;
`;

export const StyledUl = styled.ul`
  width: auto;
  margin-top: 10px;
  margin-bottom: 0;
  padding-left: 0;
  justify-content: center;

  list-style-type: none;
  text-align: center;
`;

export const StyledList = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-left: 165px;
  align-items: center;
  text-decoration: none;
`;

export const StyledImg = styled.img`
  width: 50px;
  height: 50px;
`;
