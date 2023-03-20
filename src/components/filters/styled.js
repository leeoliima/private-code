import styled from "styled-components";

export const SearchInput = styled.input`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  max-width: 405.2px;
  height: 52.14px;
  left: 50%;
  transform: translateX(-50%);
  top: 35px;
  background: #ffffff;
  border: 0.912834px solid #d1d1d1;
  border-radius: 4.34533px;
  ::placeholder {
    text-indent: 20px;
    width: 100%;
    height: 18px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 15.2086px;
    line-height: 119.4%;
    display: flex;
    align-items: center;
    color: #9c9c9c;
  }
/* 
  @media (max-width: 768px) {
    height: 40px;
  }
  @media (max-width: 480px) {
    height: 30px;
  } */
`;

