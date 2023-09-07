import styled from 'styled-components';

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

export const StyledUl = styled.ul`
  margin-top: 50px;
  padding: 0;
  display: flex;
  flex-direction: row;

  background: whitesmoke;
  color: white;

  border: 1px solid grey;
  list-style-type: none;
  font-size: 26px;
  line-height: 1.5;
`;

export const StyledPercentage = styled.span``;

export const ListItem = styled.li`
  width: 100px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  background-color: ${props => (props.$idx = getRandomColor())};
  text-align: center;
`;
