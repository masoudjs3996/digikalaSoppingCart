
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { dataProducts } from "../data/data";
import productReducer from "./ProductReducer";

const ProductContext = createContext();
const ProductContextDispatcher = createContext();

const ProductProvider = ({children}) => {
    const [product,dispatch] = useReducer(productReducer,dataProducts)
  return (
    <>
      <ProductContext.Provider value={product}>
        <ProductContextDispatcher.Provider value={dispatch}>
            {children}
        </ProductContextDispatcher.Provider>
      </ProductContext.Provider>
    </>
  );
};

export const useProduct = () => useContext(ProductContext)
export const useProductActions = () => useContext(ProductContextDispatcher)

export default ProductProvider;
