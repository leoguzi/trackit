import styled from "styled-components";

const Logo = styled.img`
  margin: 50px auto 0 auto;
  width: 300px;
`;

const FormField = styled.input`
  width: 100%;
  max-width: 310px;
  height: 45px;
  border-radius: 5px;
  margin: 3px 10px 3px 10px;
  border: 1px #d4d4d4 solid;
  padding-left: 10px;
  font-size: 20px;
  color: #dbdbdb;
`;

const FormButton = styled.button`
  width: 100%;
  max-width: 310px;
  height: 45px;
  border-radius: 5px;
  margin: 3px 10px 3px 10px;
  background-color: #52b6ff;
  color: #ffffff;
  font-size: 20px;
  border: none;
`;

const StandardLink = styled.a`
  margin-top: 20px;
  color: #52b6ff;
  font-size: 14px;
`;
export { Logo, FormButton, FormField, StandardLink };
