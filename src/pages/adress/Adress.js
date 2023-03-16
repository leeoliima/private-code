import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import { goToFeed } from "../../routers/Coordinator";
import { Form } from "./styled";
import { useNavigate } from "react-router-dom";


export const Adress = () => {
  const { register, handleSubmit, setValue, setFocus } = useForm();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [setSelected] = useState(null);
  const navigate = useNavigate();

  const handleOpenModal = (product) => {
    setSelected(product);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelected(null);
    setModalIsOpen(false);
  };

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
          <select>
            <option>Delivery</option>
            <option>Retirar no local</option>
          </select>
        </label>
        <label>
          CEP:
          <input type="text" {...register("cep")} onBlur={checkCEP} />
        </label>
        <label>
          Rua:
          <input type="text" {...register("address")} />
        </label>
        <label>
          Número:
          <input type="text" {...register("addressNumber")} />
        </label>
        <label>
          Bairro:
          <input type="text" {...register("neighborhood")} />
        </label>
        <label>
          Cidade:
          <input type="text" {...register("city")} />
        </label>
        <label>
          Estado:
          <input type="text" {...register("uf")} />
        </label>
        <label>
          Complemento:
          <input type="text" {...register("complement")} />
        </label>
        <label>
          Referência:
          <input type="text" {...register("referency")} />
        </label>
        <button type="text" onClick={()=> goToFeed(navigate)}>Continuar</button>
      </Form>
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}       
      >
      
      </Modal>
    </>
  );
};
