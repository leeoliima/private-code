import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiltersForSeach } from "../../components/filters/Filters";
import { Arrow, Card, Cards, ContainerInput, Filters } from "./styled";
import { categorias } from "../../constants/db.json";
import { produtos } from "../../constants/db.json";
import Modal from "react-modal";
import Vector from "../../assets/Vector.png";
import { Cart } from "../cart/Cart";


Modal.setAppElement("#root");

export const Feed = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inputSearch, setInputSearch] = useState("");
  const [category, setCategory] = useState("");
  const [data, setdata] = useState();
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // atualiza o carrinho toda vez que o estado de cartItems for alterado
  }, [cartItems]);

  // Lógica para modal do card
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };

  // Lógica para o cart

  const handleAddToCart = (product, quantity) => {
    const productIndex = cartItems.findIndex((item) => item.id === product.id);
    if (productIndex >= 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[productIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      const newCartItem = { ...product, quantity };
      setCartItems([...cartItems, newCartItem]);
    }
    handleCloseModal();
  };

  const removeFromCart = (itemToRemove) => {
    console.log("itemToRemove", itemToRemove);
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemToRemove.id)
    );
  };

  const clearCart = () => {
    setCartItems([]); // Define o carrinho como um array vazio
  };

  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.preco * item.quantity;
  }, 0);

  const filterProducts =
    produtos &&
    produtos.filter((item) => {
      if (inputSearch !== "") {
        return item.nome.toLowerCase().includes(inputSearch.toLowerCase());
      } else {
        return item;
      }
    });

  const listCategory =
    filterProducts &&
    filterProducts.map((product) => {
      return (
        <div key={product.id}>
          <button onClick={() => setCategory(product.category)}>
            {product.category}
          </button>
        </div>
      );
    });

  return (
    <>
      <ContainerInput>
        <FiltersForSeach
          data={data}
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
        />
      </ContainerInput>

      <Filters>
        <Arrow src={Vector} />
        <div>
          <ul>
            {categorias.map((category) => (
              <h5 key={category.id}>{category.nome}</h5>
            ))}
          </ul>
        </div>
        <div>{listCategory}</div>
      </Filters>

      <Cart
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        cartTotal={cartTotal}
        cartItems={cartItems}
      />

      <Cards>
        {filterProducts.map((product) => (
          <Card key={product.id} onClick={() => handleOpenModal(product)}>
            <h5>{product.nome}</h5>
            <p>Preço: R${product.preco.toFixed(2)}</p>
          </Card>
        ))}
      </Cards>

      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <h2>{selectedProduct && selectedProduct.nome}</h2>
        <p>{selectedProduct && selectedProduct.descricao}</p>
        <p>Preço: R${selectedProduct && selectedProduct.preco.toFixed(2)}</p>
        <label>Quantidade:</label>
        <input
          type="number"
          defaultValue="1"
          min="1"
          max="10"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          onClick={() => {
            handleAddToCart(selectedProduct, quantity)}}
        >
          Adicionar ao carrinho
        </button>
      </Modal>
    </>
  );
};
