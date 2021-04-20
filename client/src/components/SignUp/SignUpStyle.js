import styled from "styled-components";

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const SignUpCard = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  height: 400px;
  padding: 10px;
  margin-top: 40px;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: grey;
`;

export const Input = styled.input`
  width: 70%;
  padding: 10px;
  margin: 10px;
  font-size: 18px;
`;

export const Button = styled.button`
  padding: 10px 30px;
  color: #ffffff;
  font-size: 18px;
  border: 0px;
  border-radius: 8px;
  margin: 25px;
  background-color: rgb(107, 107, 182);
`;

export const SelectInput = styled.select`
  width: 75%;
  padding: 10px;
  margin: 10px;
  font-size: 18px;
  color: grey;
`;
