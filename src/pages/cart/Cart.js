import React, { useState } from "react";
import {
  CartContainer,
  ImgCart,
  CartItem,
  CartTotal,
  CartHeader,
  ContainerTotal,
  FinishButton,
  CancelButton,
  SpanRow,
  DivContainer,
  ButtonsContainer,
  ButtonLeast,
  ButtonMore,
  CustomModal,
  SpanName,
  SpanPrice,
  SpanQuantity,
  SpanTotal,
} from "./styled";
import PrivateCode from "../../assets/SideDark1.png";
import Check from "../../assets/check.svg";
import X from "../../assets/x.svg";
import { Adress } from "../adress/Adress";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const Cart = ({
  cartItems,
  removeFromCart,
  clearCart,
  cartTotal,
  handleAddToCart,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    clearCart();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <CartContainer>
      <SpanRow />
      <DivContainer>
        <ImgCart src={PrivateCode} alt="Logo da Private Code" />
      </DivContainer>
      <SpanRow />

      <CartHeader>
        <span>Produto</span>
        <span>Valor</span>
        <span>Quantidade</span>
        <span>Total</span>
      </CartHeader>

      <ul>
        {cartItems.map((item, index) => (
          <CartItem key={item.id} even={index % 2 === 0}>
            <SpanName>{item.nome}</SpanName>
            <SpanPrice>R${item.preco}</SpanPrice>
            <SpanQuantity>
              <ButtonLeast
                onClick={() => removeFromCart(item, 1)}
              ></ButtonLeast>
              {item.quantity}
              <ButtonMore onClick={() => handleAddToCart(item, 1)}></ButtonMore>
            </SpanQuantity>
            <SpanTotal>R${item.preco * item.quantity}</SpanTotal>
          </CartItem>
        ))}
      </ul>
      <ContainerTotal>
        <CartTotal>
          <div>Total:</div> <span>R$ {cartTotal}</span>
        </CartTotal>
        <ButtonsContainer>
          <FinishButton onClick={handleOpenModal}>
            <img src={Check} alt="Imagem de um check V" /> Finalizar
          </FinishButton>
          <CancelButton onClick={() => clearCart()}>
            <img src={X} alt="Imagem de um X" /> Cancelar
          </CancelButton>
        </ButtonsContainer>
      </ContainerTotal>
      <CustomModal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <Adress />
      </CustomModal>
    </CartContainer>
  );
};
