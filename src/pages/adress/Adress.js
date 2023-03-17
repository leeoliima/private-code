import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { goToFeed } from "../../routers/Coordinator";
import { Form, Inputs, InputSelect } from "./styled";
import { useNavigate } from "react-router-dom";
import { FinishButton } from "../cart/styled";

export const Adress = () => {
  const { register, handleSubmit, setValue, setFocus } = useForm();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [setSelected] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {};

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    axios(`https://viacep.com.br/ws/${cep}/json/`).then((res) => {
      setValue("address", res.data.logradouro);
      setValue("neighborhood", res.data.bairro);
      setValue("city", res.data.localidade);
      setValue("uf", res.data.uf);
      setFocus("addressNumber");
    });
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Forma de entrega:
          <br />
          <InputSelect>
            <option>Delivery</option>
            <option>Retirar no local</option>
          </InputSelect>
        </label>
        <br />
        <label>
          CEP:
          <br />
          <Inputs type="text" {...register("cep")} onBlur={checkCEP} />
        </label>
        <label>
          Bairro: <br />
        </label>
        <label>
          <Inputs type="text" {...register("neighborhood")} />
        </label>
        <label>
          Número:
          <Inputs type="text" {...register("addressNumber")} />
        </label>

        <label>
          Cidade:
          <Inputs type="text" {...register("city")} />
        </label>
        <label>
          Rua:
          <Inputs type="text" {...register("address")} />
        </label>

        <label>
          Estado:
          <Inputs type="text" {...register("uf")} />
        </label>
        <label>
          Complemento:
          <Inputs type="text" {...register("complement")} />
        </label>
        <label>
          Referência:
          <Inputs type="text" {...register("referency")} />
        </label>
        <FinishButton type="text" onClick={() => goToFeed(navigate)}>
          Continuar
        </FinishButton>
      </Form>
    </>
  );
};
