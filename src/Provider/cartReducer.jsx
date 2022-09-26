// Add function addtocart for we have batter code
const AddToCart = (state, payload) => {
  // at first we clone of over carts
  const UpdatedCart = [...state.cart];
  // after we find product selected
  const selectedProduct = UpdatedCart.findIndex((item) => {
    return item.id === payload.id;
  });
  // in here we add condition if item not exist in state
  if (selectedProduct < 0) {
    // if not exist add in cart state this product and add quantity for thate
    UpdatedCart.push({ ...payload, quantity: 1 });
    // else product exist in cart just ++ quantity
  } else {
    // in here we clone of selected product
    const UpdatedItem = { ...UpdatedCart[selectedProduct] };
    // and we ++ quantity
    UpdatedItem.quantity++;
    // in here we add this changes for product
    UpdatedCart[selectedProduct] = UpdatedItem;
  }
  // in here we get clon of state and ass new changes in state like setState
  return {
    ...state,
    cart: UpdatedCart,
    total: state.total + payload.offPrice,
  };
};

// Add function remove from cart for we have batter code
const RemoveFromCart = (state, payload) => {
  // at first we clone of over carts
  const UpdatedCart = [...state.cart];
  // in here we find our cart
  const selectedProduct = UpdatedCart.findIndex((item) => {
    return item.id === payload.id;
  });

  // in here we clone of selected product
  const UpdatedItem = { ...UpdatedCart[selectedProduct] };

  // in here we add condition if item not exist in state
  if (UpdatedItem.quantity === 1) {
    // in here we fiter our products
    const filterProduct = UpdatedCart.filter((item) => {
      return item.id !== payload.id;
    });
    return { ...state, cart: filterProduct };
  } else {
    // decrement quntity
    UpdatedItem.quantity--;
    // in here we add this changes for product
    UpdatedCart[selectedProduct] = UpdatedItem;
    // in here we return in the condition
    return {
      ...state,
      cart: UpdatedCart,
      total: state.total - payload.offPrice,
    };
  }
};



const cartReducer = (state, action) => {
  switch (action.type) {
    // this case for add cart
    case "ADD_TO_CART":
      return AddToCart(state, action.payload);
    // add case for remove product
    case "REMOVE_PRODUCT":
      return RemoveFromCart(state, action.payload);
    default:
      return state;
  }
};

export default cartReducer;
