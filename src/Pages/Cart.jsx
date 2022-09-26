import { useState } from "react";
import Layout from "../Layout/Layout";
import { useCart, useCartActions } from "../Provider/cartProvider";
import emptycart from "../img/emptycart.png";
import FontAwesome from "react-fontawesome";
import { NavLink } from "react-router-dom";
const CartPage = () => {
  // add state  for color
  const [colorActive, setColorActive] = useState([]);
  // add state for id
  const [id, setId] = useState([]);

  const setState = (pcolor, pid) => {
    setColorActive(pcolor);
    setId(pid);
  };

  // we Destructure use cart actions from cart actions provider
  const dispatch = useCartActions();
  // we Destructure cart from cart Provider or our state
  const { cart } = useCart();

  // Add increment handler
  const incrementHandler = (product) => {
    // in here we send our product to add in our state
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  // Add decrement handler
  const decrementHandler = (product) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: product });
  };
  // if cart empty show user this text
  if (!cart.length) {
    return (
      <Layout>
        <main className="h-full flex items-center py-30 w-full justify-center">
          <div className="flex flex-col justify-center items-center gap-y-10">
            <img src={emptycart} alt="empty" className="mt-10" />
            <p className="text-slate-700 font-bold lg:text-[30px]">
              سبد خرید شما خالی است !
            </p>
            <NavLink to="/">
              <button className="cursor-pointer w-[200px] bg-red-500 h-14 mb-10 rounded-lg lg:w-[500px] text-white font-bold">
                یه سر به فروشگاه میزنم{" "}
              </button>
            </NavLink>
          </div>
        </main>
      </Layout>
    );
  }
  return (
    <>
      <Layout>
        <main className=" w-full h-fit grid grid-cols-1  lg:grid-cols-2  mt-4 p-1  ">
          <section className=" w-full h-full md:w-[100%] gap-2  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
            {cart.map((product) => {
              return (
                <div className="w-full h-full border-b border-slate-300 flex py-3">
                  <div className="w-[40%] h-full flex flex-col justify-center items-center">
                    <img src={product.image} alt="" className="w-52 h-36" />
                    <div className=" w-24 px-4 py-1 border-slate-200 border-2 rounded-md flex gap-2 text-lg justify-center items-center">
                      <button
                        onClick={() => incrementHandler(product)}
                        className="text-xl  px-2 cursor-pointer font-bold text-red-400"
                      >
                        +
                      </button>
                      <button className="text-slate-500 mt-1 bordre-2">
                        {product.quantity}
                      </button>
                      <button
                        onClick={() => decrementHandler(product)}
                        className="text-xl px-2 cursor-pointer font-bold text-red-400"
                      >
                        {product.quantity > 1 ? (
                          "-"
                        ) : (
                          <FontAwesome name="trash" className="text-sm" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className=" w-[60%] h-full flex flex-col justify-center gap-2 ">
                    <h1 className="font-bold text-sm">کفش مدل</h1>
                    <h1 className="font-bold text-sm">{product.name}</h1>
                    <div className="flex">
                      <div
                        className="bg-green-600 w-6 h-6 rounded-full border-2"
                        onClick={() => setState("green", product.id)}
                      >
                        {id === product.id && colorActive === "green" ? <Svg /> : ""}
                      </div>

                      <div
                        className="bg-red-600 w-6 h-6 rounded-full border-2 -mr-1.5"
                        onClick={() => setState("red", product.id)}
                      >
                         {id === product.id && colorActive === "red" ? <Svg /> : ""}
                      </div>
                      <div
                        className="bg-blue-600 w-6 h-6 rounded-full border-2 -mr-1.5"
                        onClick={() => setState("blue", product.id)}
                      >
                        {id === product.id && colorActive === "blue" ? <Svg /> : ""}
                      </div>
                    </div>
                    {/* warranty */}
                    <div className="flex  items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4  text-slate-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
                        />
                      </svg>
                      <h3 className="text-sm text-slate-700">
                        {product.warranty}
                      </h3>
                    </div>
                    {/* free send */}
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 text-slate-700"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                        />
                      </svg>
                      <h3 className="text-sm text-slate-700">
                        {product.freesend}
                      </h3>
                    </div>
                    <h3 className="text-sm text-slate-700">
                      {product.originally}
                    </h3>
                    <h3 className="mt-2 font-bold text-sm">
                      {" "}
                      قیمت {product.price * product.quantity}تومان
                    </h3>
                    <h3 className="text-red-600 text-sm ">
                      تخفیف {product.discount}%
                    </h3>
                    <h3 className="font-bold text-sm">
                      قیمت نهایی {product.offPrice * product.quantity} تومان
                    </h3>
                  </div>
                </div>
              );
            })}
          </section>
          {/* in here we renderd cart summery component  */}
          <CartSummery />
        </main>
      </Layout>
    </>
  );
};

export default CartPage;

// this component use for cart summery
const CartSummery = () => {
  const { cart, total } = useCart();
  return (
    <section className=" flex flex-col">
      <div className="  w-full h-fit  lg:grid  pt-5 px-5 gap-1 mb-10 lg:grid-cols-1 lg:w-[400px] lg:mr-28 lg:border-2 lg:py-5 lg:gap-y-10 2xl:mr-auto xl:mr-auto">
        <div className="grid grid-cols-2 lg:gap-x-14 w-full  mb-20 lg:mb-0">
          <div className=" w-[150px] h-fit flex flex-col gap-3 ">
            <span className=" text-xs text-slate-600 font-bold ">
              {" "}
              قیمت کالا ها ({cart.length})
            </span>
            <span className=" text-xs text-slate-600 font-bold">
              جمع سبد خرید <span className="text-red-500"> با تخفیف</span>
            </span>
          </div>
          <div className=" w-[150px] h-fit flex flex-col gap-3 lg:items-end mr-auto">
            <span className="mr-12 text-xs text-slate-600 font-bold">
              {total + 10000 * cart.length} تومان
            </span>
            <span className="mr-12 text-xs text-slate-600 font-bold">
              {total} تومان{" "}
            </span>
          </div>
          <span className="mt-5 w-[270px] lg:w-[380px] text-slate-600 text-[10px]">
            هزینه این کالا ها هنوز پرداخت نشده در صورت اتمام موجودی کالا ها از
            سبد خرید حذف میشوند .
          </span>
        </div>
        <div>
          <NavLink to="/signup?redirect=checkout">
            <button className="w-full h-[50px] text-xl text-white bg-red-500 rounded-md hidden lg:block ">
              ادامه
            </button>
          </NavLink>
        </div>
      </div>
      <div className="opacity-4 border-t-2  fixed lg:hidden bottom-0 bg-white md:w-[758px] sm:w-[630px] border-slate-400 w-full h-20 p-3 flex justify-between">
        <NavLink to="/signup?redirect=checkout" className="w-full">
          <button className="w-full h-[50px] text-xl text-white bg-red-500 rounded-md ">
            ادامه
          </button>
        </NavLink>
        <div className="flex flex-col mr-11 gap-y-1 w-[170px]">
          <h1 className="text-slate-500 text-xs">جمع سبد خرید</h1>
          <span className="text-sm font-bold">{total} تومان </span>
        </div>
      </div>
    </section>
  );
};

export const Svg = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 stroke-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    </>
  );
};
