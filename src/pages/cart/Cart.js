import React from "react";
import { goToFeed, goToAdress } from "../../routers/Coordinator";
import { CartContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import PrivateCode from "../../assets/SideDark1.png"

export const Cart = ({ cartItems, removeFromCart, clearCart, cartTotal }) => {
  const navigate = useNavigate();

  return (
    <CartContainer>
      <img src={PrivateCode}/>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.nome} - Quantidade: {item.quantity} - Preço: R${item.preco}
            <button onClick={() => removeFromCart(item)}>Remover</button>
          </li>
        ))}
      </ul>
      <p>Total: R${cartTotal}</p>
      <button
        onClick={() => {
          goToFeed(navigate);
          goToAdress(navigate);
        }}
      >
        Finalizar
      </button>

      <button onClick={() => clearCart()}>Limpar carrinho</button>
    </CartContainer>
  );
};
