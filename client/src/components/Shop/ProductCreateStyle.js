import styled from "styled-components";

export const FormCard = styled.div`
  background-color: #ffffff;
  width: 80%;
  max-width: 650px;
  margin: 20px auto;
  box-shadow: 1px 1px 3px 4px #eee;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormHeader = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #80c0bd;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormInput = styled.input`
  height: 30px;
  width: 70%;
  margin: 10px;
`;

export const FormTextArea = styled.textarea`
  width: 70%;
  margin: 10px 5px;
`;

export const FormSelect = styled.select`
  height: 30px;
  width: 70%;
  margin: 10px 0px;
`;

export const FormButton = styled.button`
  padding: 10px 40px;
  margin: 15px 0px;
  background-color: #80c0bd;
  color: #fff;
  font-size: 16px;
  border: 0px;
  border-radius: 8px;
  box-shadow: 0px 0px 2px 3px #eee;
`;
