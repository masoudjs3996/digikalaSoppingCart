import { useState } from "react";
import { SiTeradata } from "react-icons/si";

const productReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_PRODUCT":
      const value = action.payload.target.value

      if (value === "") {
        return state;
        
      } else {
        const filterProduct = state.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
        return filterProduct
      }
      
    default:
      return state;
  }
};

export default productReducer;
