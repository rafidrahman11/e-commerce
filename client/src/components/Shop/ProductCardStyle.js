import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 300px;
  height: 200px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 1px 1px 5px 6px #eee;
  margin: 15px;
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  height: 120px;
  object-fit: contain;
`;

export const ProductDetails = styled.div`
  width: 300px;
  height: 80px;
  border-top: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  padding: 0px;
`;

export const ProductName = styled.h6`
  font-size: 18px;
  margin: 10px;
`;

export const ProductPrice = styled.h6`
  font-size: 18px;
  margin: 10px;
`;

export const CartButton = styled.button`
  margin-left: 10px;
  background-color: #bf63bf;
  color: #ffffff;
  border: 0px;
  padding: 5px 10px;
  border-radius: 10px;
`;
