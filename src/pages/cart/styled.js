import ReactModal from "react-modal";
import styled from "styled-components";

export const CartContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 466px;
  height: 1042px;
  left: 1215px;
  top: 38px;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 0px 2.88px 8px rgba(0, 0, 0, 0.08);
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    box-sizing: border-box;
    /* position: absolute; */
    width: 100%;
    max-width: auto;
    height: auto;
    left: 2.5%;
    top: 80%;
    background: #ffffff;
    border: 1px solid #ffffff;
    box-shadow: 0px 2.88px 8px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`;
export const ImgCart = styled.img`
  padding: 30px 0 0px 0;
  @media screen and (max-width: 768px) {
    width: 60%;
    height: 30%;
  }
`;

export const SpanRow = styled.span`
  display: block;
  width: 100%;
  border: 1.530753px solid #ebebeb;
  margin: 100px 0 50px 0;

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    border: 1.530753px solid #ebebeb;
    margin: 50px 0 5px 0;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    height: auto;
    border: 1.530753px solid #ebebeb;
    margin: 50px 0 5px 0;
    span {
      padding: 10px;
    }
  }
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 466px;
  height: auto;
  box-sizing: border-box;
  left: 1215px;
  background-color: ${(props) => (props.even ? "#F9F9F9" : "#fff")};
  word-break: break-word;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    width: auto;
    height: auto;
    box-sizing: border-box;
    left: 1215px;
    background-color: ${(props) => (props.even ? "#F9F9F9" : "#fff")};
    word-break: break-word;
  }
`;

export const SpanName = styled.span`
  width: 40%;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const SpanPrice = styled.span`
  width: 20%;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const SpanQuantity = styled.span`
  width: 30%;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 50%;
  }
`;
export const SpanTotal = styled.span`
  width: 20%;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ContainerTotal = styled.div`
  position: absolute;
  bottom: 0;
  width: 466px;
  height: 100px;
  left: 0;
  background: #ffffff;
  margin: 10px;

  @media screen and (max-width: 768px) {
    box-sizing: border-box;
    max-width: 330px;
    margin-top: 35px;
    height: 70px;
    top: 90%;
    margin-left: 0px;
    background: #ffffff;
    border: 1px solid #ffffff;
    box-shadow: 0px 2.88px 8px rgba(0, 0, 0, 0.08);
    border-radius: 6px;
  }
`;

export const CartTotal = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0 40px 0 20px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  span {
    color: #2c9a44;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonLeast = styled.button`
  border: 15px solid gray;
  border-radius: 100px;
  position: relative;
  width: 25px;
  height: 25px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s ease;
  margin: 0 10px;
  font-weight: bold;

  &::before {
    content: "-";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: #fff;
  }

  &:hover {
    background-color: #eee;
  }
`;

export const ButtonMore = styled.button`
  border: 15px solid red;
  border-radius: 100px;
  position: relative;
  width: 25px;
  height: 25px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.3s ease;
  margin: 0 10px;
  font-weight: bold;

  &::before {
    content: "+";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    color: #fff;
  }

  &:hover {
    background-color: #eee;
  }
`;

export const FinishButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 187.21px;
  height: 56.81px;
  top: 994px;
  bottom: 0;
  background: #e83737;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    margin-right: 7px;
    width: 15%;
  }
  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 5px;
    width: 87.21px;
    height: 36.81px;
    top: 994px;
    left: 10px;
    bottom: 0;
    background: #e83737;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-right: 7px;
      width: 15%;
    }
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  color: #696969;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 187.21px;
  height: 56.81px;
  top: 994px;
  bottom: 0;
  background: #ffffff;
  border: 1px solid #c6c6c6;
  margin-right: 20px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110.9%;
  align-items: center;
  justify-content: center;
  display: flex;
  img {
    margin-right: 7px;
    width: 15%;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 5px;
    width: 87.21px;
    height: 36.81px;
    top: 994px;
    bottom: 0;
    background: #ffffff;
    border: 1px solid #c6c6c6;
    margin-right: 20px;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 110.9%;
    align-items: center;
    justify-content: center;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-right: 7px;
      width: 15%;
    }
  }
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
`;

export const CustomModal = styled(ReactModal)`
  margin: 0;
  padding: 0;
  height: auto;
`;
