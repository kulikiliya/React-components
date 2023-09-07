import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: white;
  width: 500px;
  border: 1px solid grey;
  font-size: 26px;
  line-height: 1.5;
`;

export const StyledText = styled.p`
  margin: 10px;
`;

export const StyledImgDiv = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImg = styled.img`
  width: 120px;
  height: 140px;
  object-fit: cover;
  margin-top: 10px;
`;

export const StyledUl = styled.ul`
  width: auto;
  margin-top: 10px;
  margin-bottom: 0;
  padding-left: 0;
  display: flex;
  justify-content: space-around;

  border: 1px solid grey;

  list-style-type: none;
  text-align: center;
`;

export const StyledList = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  border: 1px solid grey;

  &:first-child {
    border-left: 0;
    border-right: 0;
  }

  &:last-child {
    border-left: 0;
    border-right: 0;
  }
`;
