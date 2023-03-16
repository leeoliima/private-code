import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiltersForSeach } from "../../components/filters/Filters";
import {
  Arrow,
  Card,
  CardDescription,
  CardPrice,
  Cards,
  CardTitle,
  Categorias,
  ContainerInput,
  Filters,
  Modelo,
  SearchInput,
} from "./styled";
import { categorias } from "../../constants/db.json";
import { produtos } from "../../constants/db.json";
import Modal from "react-modal";
import Vector from "../../assets/Vector.png";

export const Feed = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };

  return (
    <>
      <ContainerInput>
        <SearchInput placeholder="Pesquisar" />
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
      </Filters>

      <Cards>
        {produtos.map((product) => (
          <Card key={product.id} onClick={() => handleOpenModal(product)}>
            <h5>{product.nome}</h5>
            <p>{product.descricao}</p>
            <p>Preço: R${product.preco.toFixed(2)}</p>
          </Card>
        ))}
      </Cards>

      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        <h2>{selectedProduct && selectedProduct.nome}</h2>
        <p>{selectedProduct && selectedProduct.descricao}</p>
        <p>Preço: R${selectedProduct && selectedProduct.preco.toFixed(2)}</p>
        <button onClick={handleCloseModal}>Fechar</button>
      </Modal>
    </>
  );
};
