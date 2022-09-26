import { useState } from "react";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Provider/cartProvider";
import FontAwesome from "react-fontawesome";
import { checkInCart } from "../utils/checkInCart";
import { NavLink } from "react-router-dom";
import { useProduct } from "../Provider/ProductProvider";
import Footer from "../Component/Footer/Footer";

const HomePage = () => {
  // access to the state cart
  const { cart } = useCart();
  //  accesss to the product
  const  product  = useProduct();
  // in here we access to the setState in cartprovider.jsx
  const dispatch = useCartActions();
  const addProductHandler = (product) => {
    // toast.success(`به سبد خرید اضافه شد  ${product.name}`);
    // and in here we send our changes by type and we send our values by name payload
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  // add state for add color for heart
  const [heart, setHeart] = useState(false);
  const [id, setId] = useState([0]);
  const functionHeart = (pid,pname) => {
    setHeart(true);
    setId([...id, pid]);
  };

  return (
    <>
      <Layout>
        <h1 className="text-xl text-slate-800 flex justify-center mb-10  mt-10">
          محصولات ما
        </h1>
        <main className="mt-4 relative flex justify-center items-center ">
          <section className=" mb-24 md:mb-0  grid grid-cols-1 sm:grid-cols-2 sm:gap-x-10 md:grid-cols-3 md:gap-x-10 lg:grid-cols-4 lg:gap-x-10 md:gap-y-20 lg:gap-y-14 rounded gap-y-20 p-1 w-full ">
            {product.map((product) => {
              return (
                <section
                  className="flex flex-col justify-between rounded border w-full px-2 h-[400px] hover:border-2 hover:border-slate-400 transition-all"
                  key={product.id}
                >
                  <div className=" flex justify-between relative">
                    <div className=" flex flex-col mt-10">
                      <span className="bg-blue-700 flex justify-center items-center w-7 h-4 rounded-full text-xs font-bold absolute right-2 top-2 text-white ">
                        {product.amount}
                      </span>
                      <span className="bg-pink-200">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1}
                          stroke="red"
                          className={
                            id.includes(product.id) && heart
                              ? "w-6 h-6 absolute top-8 right-2.5 cursor-pointer fill-red-500" 
                              : "w-6 h-6 absolute top-8 right-2.5 cursor-pointer "
                              
                              // : "w-6 h-6 absolute top-8 right-2.5 cursor-pointer "
                          }
                          onClick={() => functionHeart(product.id)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="bg-red-500 text-xs font-bold absolute left-2 top-2 text-white flex items-center justify-center rounded-full w-12 h-5">
                      {product.discount}%off
                    </div>
                  </div>
                  <div className="">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-52 h-52 mx-auto my-3"
                    />
                  </div>
                  <div className=" flex items-center justify-between">
                    <div className="flex-col">
                      <span className="text-slate-700 font-semibold mt-32 text[10px] 2xl:text-[18px]">
                        {product.name}
                      </span>
                      <div className="flex ">
                        <FontAwesome name="star" className="text-yellow-400" />
                        <FontAwesome name="star" className="text-yellow-400" />
                        <FontAwesome name="star" className="text-yellow-400" />
                      </div>
                      <div className="flex justify-between relative ">
                        <span className="text[10px] 2xl:text-[18px]">
                          {product.price} تومان{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-full h-10 mt-3">
                    <button
                      onClick={() => addProductHandler(product)}
                      className="w-full h-10 absolute left-0  bottom-2 text-[10px] transition-all text-red-500 font-bold bg-slate-200 border-2 border-slate-300 rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white"
                    >
                      {checkInCart(cart, product) ? (
                        <NavLink to="/cart"> ادامه خرید </NavLink>
                      ) : (
                        " افزودن به سبد خرید "
                      )}
                    </button>
                  </div>
                </section>
              );
            })}
          </section>
        </main>
        <Footer />
      </Layout>
    </>
  );
};

export default HomePage;

// {/* <div className="bg-slate-200 flex flex-row-reverse justify-between p-2">
// <p className="text-sm">{product.name}</p>
// <p>$ {product.price}</p>
// <button
//   className="text-white text-sm p-1 bg-[#6d28d9] rounded cursor-pointer"
//   onClick={() => addProductHandler(product)}
// >
//   افزودن به سبد خرید
// </button>
// </div> */}
