import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ContinueButton,
  Form,
  FormGroup,
  InputCep,
  InputCity,
  InputComplement,
  InputNeighborhood,
  InputNumber,
  InputReferency,
  InputSelect,
  InputState,
  LabelCep,
  LabelCity,
  LabelComplement,
  LabelNeighborhood,
  LabelNumber,
  LabelReferency,
  LabelSelect,
  LabelState,
} from "./styled";
import { useNavigate } from "react-router-dom";
import { SpanRow } from "../cart/styled";
import { AlertPopup } from "../../components/alert/Alert";
import Sucess from "../../assets/pedido-sucess.png";

export const Adress = () => {
  const { register, handleSubmit, setValue, setFocus } = useForm();
  const [showAlert, setShowAlert] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState("delivery");
  const [formClose, setFormClose] = useState(false);

  const navigate = useNavigate();

  const onSubmit = (e) => {
    setShowAlert(true);
    setFormClose(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
    navigate("/");
  };

  const handleDeliveryOptionChange = (e) => {
    setDeliveryOption(e.target.value);
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    axios(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
      setValue("neighborhood", res.data.bairro);
      setValue("city", res.data.localidade);
      setValue("uf", res.data.uf);
      setFocus("addressNumber");
    });
  };

  return (
    <>
      {!formClose && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <SpanRow />
          <LabelSelect>Forma de entrega:</LabelSelect>
          <InputSelect onChange={handleDeliveryOptionChange}>
            <option value="delivery">Delivery</option>
            <option value="pickup">Retirar no local</option>
          </InputSelect>
          {deliveryOption === "delivery" && (
            <div>
              <FormGroup>
                <div>
                  <LabelCep>CEP:</LabelCep>
                  <InputCep
                    type="text"
                    {...register("cep")}
                    onBlur={checkCEP}
                    placeholder="CEP"
                  />
                </div>
                <div>
                  <LabelNeighborhood>Bairro:</LabelNeighborhood>
                  <InputNeighborhood
                    type="text"
                    {...register("neighborhood")}
                    placeholder="Bairro"
                  />
                </div>
              </FormGroup>

              <FormGroup>
                <div>
                  <LabelNumber>Número:</LabelNumber>
                  <InputNumber
                    type="text"
                    {...register("addressNumber")}
                    placeholder="Número"
                  />
                </div>
                <div>
                  <LabelCity>Cidade:</LabelCity>
                  <InputCity
                    type="text"
                    {...register("city")}
                    placeholder="Cidade"
                  />
                </div>
              </FormGroup>

              <LabelState>Estado:</LabelState>
              <InputState
                type="text"
                {...register("uf")}
                placeholder="Estado"
              />
              <LabelComplement>Complemento:</LabelComplement>
              <InputComplement
                type="text"
                {...register("complement")}
                placeholder="Complemento"
              />
              <LabelReferency>Referência:</LabelReferency>
              <InputReferency
                type="text"
                {...register("referency")}
                placeholder="Referência"
              />
            </div>
          )}
          <ContinueButton type="text" onClick={handleSubmit(onSubmit)}>
            Continuar
          </ContinueButton>
        </Form>
      )}
      {showAlert && (
        <AlertPopup
          image={Sucess}
          text="Pedido realizado com sucesso"
          onClose={handleCloseAlert}
        />
      )}
    </>
  );
};
