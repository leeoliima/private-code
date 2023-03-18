import React from "react";
import { SearchInput } from "./styled";

export const FiltersForSeach = (props) => {
  const onChangeName = (event) => {
    props.setInputSearch(event.target.value);
  };

  return (
    <SearchInput
      type={"text"}
      placeholder="Pesquisar..."
      value={props.inputSearch}
      onChange={onChangeName}
    />
  );
};
