import { createContext, useContext, useReducer } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext();
const CartContextDispatcher = createContext();
const initialState = {
    cart:[],
    total:0
}
const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <CartContext.Provider value={cart}>
        <CartContextDispatcher.Provider value={dispatch}>
          {children}
        </CartContextDispatcher.Provider>
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
// every were we want access to the this state we call this function 
export const useCart = () => useContext(CartContext)
// evrey were we want to set state call this function 
export const useCartActions = () => useContext(CartContextDispatcher)