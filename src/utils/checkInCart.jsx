// add function for check in cart 
export const checkInCart = (cart,product) =>{
    return cart.find((C) => C.id === product.id)
}