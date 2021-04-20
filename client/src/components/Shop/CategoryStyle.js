import styled from "styled-components";

export const CategoryContainer = styled.div`
  flex: 0.2;
  background-color: #ffffff;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 6px #eee;
`;

export const CategoryHeading = styled.h2`
  text-align: center;
  font-size: 24px;
  color: purple;
`;

export const CategoryList = styled.ul`
  list-style: none;
  margin-top: 35px;
  padding-left: 0px;
`;

export const CategoryItem = styled.li`
  text-align: left;
  font-size: 18px;
  padding: 10px;
  border-bottom: 1px solid lightgrey;
  cursor: pointer;
`;
