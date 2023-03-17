import Modal from "react-modal";
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
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImgCart = styled.img`
  padding: 30px 0 0px 0;
`;

export const SpanRow = styled.span`
  display: block;
  width: 100%;
  border: 1.530753px solid #ebebeb;
  margin: 100px 0 50px 0;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
  font-weight: bold;
  width: 100%;
  box-sizing: border-box;
`;

export const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 466px;
  height: 77px;
  box-sizing: border-box;
  left: 1215px;
  background-color: ${(props) => (props.even ? "#F9F9F9" : "#fff")};
`;

export const ContainerTotal = styled.div`
  position: absolute;
  bottom: 0;
  width: 466px;
  height: 100px;
  left: 0;
  background: #ffffff;
  margin: 10px;
`;

export const CartTotal = styled.p`
  font-weight: bold;
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
  background: #fff;
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
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #007bff;
  cursor: pointer;
`;

export const CustomModal = styled(Modal)`
  box-sizing: border-box;
  font-size: 16px;
  position: absolute;
  width: 1111px;
  height: 630px;
  left: 275px;
  top: 199px;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 0px 2.88px 8px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
`;
