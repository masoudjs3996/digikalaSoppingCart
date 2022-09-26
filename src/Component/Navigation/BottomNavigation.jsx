import { NavLink } from "react-router-dom";
import { useCart } from "../../Provider/cartProvider";
import Img from "../../img/digicala.png";
import { useAuth } from "../../Provider/AuthProvider";
import { useProduct, useProductActions } from "../../Provider/ProductProvider";
import { useState } from "react";

const BottomNavigation = () => {
  // access to the our state by cantaxt
  const { cart } = useCart();
  // access to the dispatch product reducer
  const dispatch = useProductActions();

  const [value,setValue] = useState("")
  

  // access to tha state auth for login condition
  const userData = useAuth();

  const SearchHandler = (e) => {
    dispatch({type:"SEARCH_PRODUCT",payload:e})
    setValue(e.target.value)

  };

  return (
    <>
      <div className="flex flex-col lg:h-[130px] w-full">
        <div className=" lg:w-[1017px] xl:w-[1273px] 2xl:w-[1515px] lg:fixed lg:z-10 lg:bg-white h-[60px] flex justify-between items-center px-1 lg:h-[90px] ">
          <img
            src={Img}
            alt=""
            className="w-30 h-20 rounded-md hidden lg:block"
          />
          <div className="h-10 w-full flex items-center rounded-lg bg-slate-200 px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="text"
              className="w-full p-1  rounded-md  focus:outline-none bg-slate-200 text-sm text-slate-400"
              placeholder="جستجو..."
              onChange={(e) => SearchHandler(e)}
              value={value}
            />
          </div>
          <div className=" w-40 h-10 lg:w-[300px]  flex items-center justify-end lg:gap-x-10 gap-x-3 ">
            {userData ? (
              <NavLink to="/profile">
                <div className="flex cursor-pointer items-center justify-end h-20  lg:border-2 lg:h-10 lg:px-3 lg:rounded-md">
                  <p className="text-slate-400 font-bold text-[13px] hidden lg:block">
                    {userData.name}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  +{" "}
                </div>
              </NavLink>
            ) : (
              <NavLink to="/signup">
                <div className="flex cursor-pointer items-center justify-end h-20  lg:border-2 lg:h-10 lg:px-3 lg:rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 mt-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                  <span className="font-bold text-xs lg:hidden">ورود</span>
                  <span className="font-bold text-xs text-center md:hidden sm:hidden hidden lg:block">
                    {" "}
                    ورود | ثبت نام
                  </span>
                </div>
              </NavLink>
            )}
            <div>
              <NavLink to="./cart" className="relative">
                {cart.length ? (
                  <p className="bg-red-500 absolute w-[20px] bottom-3 left-3 rounded-[50%] flex items-center justify-center text-sm font-bold text-white">
                    {cart.length}
                  </p>
                ) : (
                  ""
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="hidden lg:h-10 lg:block mt-24 ">
          <ul className="flex gap-x-5">
            <NavLink to="/">
              <li className="border-l-2 border-slate-200 text-[11px] font-bold px-3 cursor-pointer flex items-center justify-center">
                خانه
              </li>
            </NavLink>
            <NavLink to="/">
              <li className="border-l-2 border-slate-200 text-[11px] font-bold px-3 cursor-pointer flex items-center justify-center">
                فروشگاه
              </li>
            </NavLink>

            <NavLink to="/signup">
              <li className="border-l-2 border-slate-200 text-[11px] font-bold px-3 cursor-pointer flex items-center justify-center">
                ثبت نام
              </li>
            </NavLink>
            <li className="border-l-2 border-slate-200 text-[11px] font-bold px-3 cursor-pointer flex items-center justify-center">
              درباره ما
            </li>
            <li className="border-l-2 border-slate-200 text-[11px] font-bold px-3 cursor-pointer flex items-center justify-center">
              فروشنده شوید
            </li>
            <li className="border-l-2 border-slate-200 text-[11px] font-bold px-3 cursor-pointer flex items-center justify-center">
              سوالی دارید ؟
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BottomNavigation;
