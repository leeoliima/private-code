import styled from "styled-components";

export const Alert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
`;

export const AlertImage = styled.img`
  width: 308px;
  height: 154px;
  left: 639px;
  top: 440px;
`;

export const AlertText = styled.p`
  width: 265px;
  height: 76px;
  left: 660px;
  top: 596px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 119.4%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #0cab2f;
`;

export const AlertButton = styled.button`
  left: 33.56%;
  right: 42.53%;
  top: 61.59%;
  width: 413px;
  height: 72px;
  bottom: 31.96%;
  background: #0cab2f;
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  p {
    left: 42.53%;
    right: 51.39%;
    top: 63.74%;
    bottom: 34.11%;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 119.4%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
  }
`;
