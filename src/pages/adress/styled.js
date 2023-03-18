import styled from "styled-components";

export const Form = styled.form`
  box-sizing: border-box;
  position: absolute;
  width: 493px;
  height: 785px;
  left: 585px;
  top: 154px;
  background: #ffffff;
  border: 1px solid #ffffff;
  box-shadow: 0px 2.88px 8px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;  
`;


export const InputSelect = styled.select`
  box-sizing: border-box;
  padding: 15px;
  margin: 0 40px 0 40px;
  width: 413px;
  height: 48px;
  left: 625px;
  top: 302px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
`;

export const LabelSelect = styled.label`
  width: 113px;
  height: 17px;
  left: 625px;
  top: 278px;
  margin: 0px 0px 10px 40px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 119.4%;
  display: flex;
  align-items: center;

  color: #383838;
  option {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 119.4%;
  }
`;

export const InputCep = styled.input`
  box-sizing: border-box;
  margin: 10px 0px 0 40px;
  width: 121px;
  height: 48px;
  left: 625px;
  top: 392px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  ::placeholder{
    text-indent: 15px;
}
`;

export const LabelCep = styled.label`
  width: 27px;
  height: 17px;
  margin: 10px 0px 0 40px;
  left: 625px;
  top: 368px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 119.4%;
  display: flex;
  align-items: center;
  color: #383838;
`;

export const InputNeighborhood = styled.input`
  box-sizing: border-box;
  margin: 10px 40px 0px 0px;
  width: 279px;
  height: 48px;
  left: 759px;
  top: 392px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  ::placeholder{
    text-indent: 15px;
}
`;

export const LabelNeighborhood = styled.label`
  width: 39px;
  height: 17px;
  left: 759px;
  top: 368px;
  margin: 10px 40px 0px 0px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 119.4%;
  display: flex;
  align-items: center;
  color: #383838;
`;

export const InputNumber = styled.input`
  box-sizing: border-box;
  margin: 10px 0px 0 40px;
  width: 121px;
  height: 48px;
  left: 625px;
  top: 482px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  ::placeholder{
    text-indent: 15px;
}
`;

export const LabelNumber = styled.label`
  width: 51px;
  height: 17px;
  left: 625px;
  top: 458px;
  margin: 10px 0px 0px 40px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 119.4%;
  display: flex;
  align-items: center;
  color: #383838;
`;

export const InputCity = styled.input`
  box-sizing: border-box;
  width: 279px;
  height: 48px;
  left: 759px;
  margin: 10px 40px 0px 0px;
  top: 482px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  ::placeholder{
    text-indent: 15px;
}
`;

export const LabelCity = styled.label`
  width: 45px;
  height: 17px;
  left: 759px;
  margin: 10px 40px 0px 0px;
  top: 458px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 119.4%;
  display: flex;
  align-items: center;
  color: #383838;
`;

export const InputState = styled.input`
  box-sizing: border-box;
  width: 413px;
  height: 48px;
  left: 625px;
  top: 566px;
  margin: 0px 0px 10px 40px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  ::placeholder{
    text-indent: 15px;
}
`;

export const LabelState = styled.label`
  width: 44px;
  height: 17px;
  left: 625px;
  margin: 0 40px 0 40px;
  top: 542px;
  margin: 0px 0px 10px 40px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 119.4%;
  display: flex;
  align-items: center;
  color: #383838;
`;

export const InputComplement = styled.input`
  box-sizing: border-box;
  width: 413px;
  height: 48px;
  left: 625px;
  margin: 0px 0px 10px 40px;
  top: 654px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  ::placeholder{
    text-indent: 15px;
}
`;

export const LabelComplement = styled.label`
  width: 90px;
  height: 17px;
  left: 625px;
  margin: 0px 0px 10px 40px;
  top: 630px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 119.4%;
  display: flex;
  align-items: center;
  color: #383838;
`;

export const InputReferency = styled.input`
  box-sizing: border-box;
  width: 413px;
  height: 48px;
  left: 625px;
  margin: 0 40px 0 40px;
  top: 654px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
  border-radius: 4px;
  ::placeholder{
    text-indent: 15px;
}
`;

export const LabelReferency = styled.label`
  width: 90px;
  height: 17px;
  left: 625px;
  margin: 0px 0px 10px 40px;
  top: 630px;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 119.4%;
  display: flex;
  align-items: center;
  color: #383838;
`;

export const ContinueButton = styled.button`
  padding: 10px 20px;
  margin: 0 40px 0 40px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 413px;
  height: 68px;
  left: 625px;
  top: 740px;
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
