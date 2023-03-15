import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiltersForSeach } from "../../components/filters/Filters";
import { ContainerInput, Filters, SearchInput } from "./styled";


export const Feed = () => {

  const navigate = useNavigate();
  const [data, setdata] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [category, setCategory] = useState("");
  const [erro, setErro] = useState("");


  useEffect(() => {
    setisLoading(true);
    axios
      .get(`/data.json`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setdata(res.data.restaurants);
        setisLoading(false);
      })
      .catch((err) => {
        if (err.response.data.message === "Não autorizado") {
          navigate('/signup');
        } else if (
          err.response.data.message === "Usuário não possui endereço cadastrado"
        ) {
            navigate("/cadastro-endereco");
        }
      });
  }, [navigate, inputSearch, category]);


  return (
    <>
    <ContainerInput>
    <SearchInput placeholder="Pesquisar"/>
    </ContainerInput>

    <Filters>
      <FiltersForSeach></FiltersForSeach>
    </Filters>



    </>
  );
};
