import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiltersForSeach } from "../../components/filters/Filters";
import {
  ArrowButton,
  ArrowLeft,
  ArrowRight,
  Card,
  CardDescription,
  CardPrice,
  Cards,
  CardTitle,
  Categories,
  CategoryMenu,
  ContainerBody,
  ContainerCategories,
  ContainerInput,
  CustomModal,
  DivInfo,
  ImgPopUp,
  LegendProduct,
  SearchButton,
  User,
  UserImg,
  UserName,
} from "./styled";
import { categorias } from "../../constants/db.json";
import { produtos } from "../../constants/db.json";
import Modal from "react-modal";
import { Cart } from "../cart/Cart";
import LeftArrow from "../../assets/LeftArrow.png";
import ButtonSearch from "../../assets/SearchButton.png";
import RightArrow from "../../assets/RightArrow.png";
import ImgCard1 from "../../assets/ImgCard1.png";
import { FinishButton } from "../cart/styled";
import UserPhoto from "../../assets/user.png";

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
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {}, [cartItems]);

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

  const handleCategoryClick = (categoria) => {
    setSelectedCategory(categoria);
  };

  const handleMoveLeft = () => {
    setPosition(position - 100);
  };

  const handleMoveRight = () => {
    setPosition(position + 100);
  };

  const removeFromCart = (itemToRemove) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.id === itemToRemove.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
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
      if (selectedCategory && product.nome === selectedCategory.nome) {
        return (
          <div key={product.id}>
            <button onClick={() => handleCategoryClick(product)}>
              {product.nome}
            </button>
          </div>
        );
      }
    });

  return (
    <ContainerBody>
      <ContainerInput>
        <FiltersForSeach
          data={data}
          inputSearch={inputSearch}
          setInputSearch={setInputSearch}
        />
        <SearchButton>
          <img src={ButtonSearch} alt="Lupa pesquisa" />
        </SearchButton>
      </ContainerInput>

      <ContainerCategories>
        <ArrowButton onClick={handleMoveLeft}>
          <ArrowLeft src={LeftArrow} />
        </ArrowButton>
        <CategoryMenu position={position}>
          {categorias.map((category) => (
            <Categories
              key={category.id}
              onClick={() => setSelectedCategory(category)}
            >
              {category.nome} <span />
            </Categories>
          ))}
        </CategoryMenu>
        <ArrowButton onClick={handleMoveRight}>
          <ArrowRight src={RightArrow} />
        </ArrowButton>
      </ContainerCategories>

      <Cart
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        cartTotal={cartTotal}
        cartItems={cartItems}
        handleAddToCart={handleAddToCart}
      />
      <Card>
        {filterProducts.map((product) => (
          <Cards key={product.id} onClick={() => handleOpenModal(product)}>
            <img src={ImgCard1} alt="Imagem do produto do card" />
            <LegendProduct>
              <h5>{product.nome}</h5>
              <p>Preço: R${product.preco.toFixed(2)}</p>
            </LegendProduct>
          </Cards>
          // Obs: Foi deixado apenas uma imagem, pois fiquei na dúvida se poderia alterar o banco de dados para adicionar uma coluna imagens e asasim, posteriormente fazer o map para cada card respectivo.
        ))}
      </Card>

      <CustomModal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <div>
          <ImgPopUp src={ImgCard1} alt="Imagem do produto do card" />
        </div>
        <DivInfo>
          <CardTitle>{selectedProduct && selectedProduct.nome}</CardTitle>
          <CardDescription>
            {selectedProduct && selectedProduct.descricao}
          </CardDescription>
          <CardPrice>
            Preço: R${selectedProduct && selectedProduct.preco.toFixed(2)}
          </CardPrice>
          <label>Quantidade:</label>
          <input
            type="number"
            defaultValue="1"
            min="1"
            max="10"
            onChange={(e) => setQuantity(e.target.value)}
          />

          <FinishButton
            onClick={() => {
              handleAddToCart(selectedProduct, quantity);
            }}
            disabled={!selectedProduct}
          >
            Adicionar
          </FinishButton>
        </DivInfo>
      </CustomModal>
      <User>
        <UserImg src={UserPhoto} alt="Foto do usuário" />
        <UserName>Amanda Morais</UserName>
      </User>
    </ContainerBody>
  );
};
