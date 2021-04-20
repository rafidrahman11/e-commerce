import styled from "styled-components";

export const CartCard = styled.div`
  background-color: #ffffff;
  width: 80%;
  max-width: 650px;
  margin: 20px auto;
  box-shadow: 1px 1px 3px 4px #eee;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const CartHeader = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #80c0bd;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;
`;

export const RemoveProductButton = styled.button`
  padding: 0px 20px;
  height: 35px;
  background-color: #80c0bd;
  color: #fff;
  font-size: 14px;
  border: 0px;
  border-radius: 8px;
  box-shadow: 0px 0px 2px 3px #eee;
  align-self: center;
`;

export const ConfirmOrderButton = styled.button`
  padding: 10px 40px;
  margin: 15px auto;
  width: 60%;
  background-color: #80c0bd;
  color: #fff;
  font-size: 16px;
  border: 0px;
  border-radius: 8px;
  box-shadow: 0px 0px 2px 3px #eee;
`;
