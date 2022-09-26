import { useState } from "react";
import { NavLink } from "react-router-dom";
import Img from "../../img/digicala.png";
import BottomNavigation from "./BottomNavigation";
const Navigation = () => {
  const [showList, setShowList] = useState(false);
  return (
    <>
      {/* this is for small mobile */}
      <header className="w-full h-16 bg-[#ede9fe] lg:hidden">
        <nav className="flex justify-center items-center h-full">
          <ul className="flex justify-between w-full h-8 items-center">
            <li className="mr-0 p-2">
              <button
                className="w-full h-full p-2 "
                onClick={() => setShowList(!showList)}
              >
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </li>
            <li>
              {" "}
              <img src={Img} alt="" className="w-30 h-20 rounded-md" />
            </li>
            <li className="ml-0 p-2 ">
              <button className="w-full h-full">
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
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {/* show links */}
      {showList ? (
        <div className="flex items-center justify-start ">
          <div className="w-[150px] h-fit left-0 flex flex-col p-3  gap-2 rounded-lg lg:hidden">
            <img src={Img} alt="" className="w-20 h-10 rounded-md " />
            <hr />
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <h1 className="mr-2 text-sm  text-slate-400">
                <NavLink to="/" exact activeClassName="text-slate-900">
                  خانه
                </NavLink>
              </h1>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5  text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <h1 className="mr-2 text-sm text-slate-400">
                <NavLink to="/cart" activeClassName="text-slate-900">
                  سبد خرید
                </NavLink>
              </h1>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5  text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              <h1 className="mr-2 text-sm  text-slate-400">
                <NavLink to="/signup" exact activeClassName="text-slate-900">
                  ثبت نام
                </NavLink>
              </h1>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {!showList ? <BottomNavigation /> : " "}
    </>
  );
};

export default Navigation;
