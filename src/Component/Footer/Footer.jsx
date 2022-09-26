import { NavLink } from "react-router-dom";
import img from "../../img/digicala.png";
import im1 from "../../img/expers.png";
import im2 from "../../img/paymynt.png";
import im3 from "../../img/sevenday.png";
import im4 from "../../img/backproduct.png";
import im5 from "../../img/orginally2.png";
import { FaInstagram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiAparat } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <section className=" block fixed md:hidden opacity-100 bottom-0 bg-slate-50 w-full px-4 md:w-[758px] sm:w-[630px]">
        <div className=" flex justify-between items-center w-full h-[100px] ">
          <div>
            <NavLink
              exact
              to="/"
              activeClassName="text-slate-400"
              className="text-slate-800 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </NavLink>
          </div>
          <div>
            <NavLink
              exact
              to="/cart"
              activeClassName="text-slate-400"
              className="text-slate-800 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </NavLink>
          </div>
          <div>
            <NavLink
              exact
              to="/login"
              activeClassName="text-slate-400"
              className="text-slate-800 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/notfound"
              activeClassName="text-slate-400"
              className="text-slate-800 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </section>
      <section className="hidden md:block mt-10 gap-y-10">
        <div className="w-full  h-[100px] flex items-center justify-between">
          <img src={img} alt="digi" className=" w-[200px] h-[150px]" />
          <NavLink to="/">
            <button className="border-2 border-slate-300 rounded-lg w-[150px] py-3 font-bold text-[13px] flex flex-row-reverse gap-x-2 px-3 text-slate-400">
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
                  d="M4.5 15.75l7.5-7.5 7.5 7.5"
                />
              </svg>
              بازگشت به بالا{" "}
            </button>
          </NavLink>
        </div>
        <div className="flex gap-x-4 px-5">
          <span className="font-bold text-slate-700 text-[12px]">
            تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
          </span>
          <span className="font-bold text-slate-700 text-[12px]">|</span>
          <span className="font-bold text-slate-700 text-[12px]">
            ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
          </span>
        </div>
        <div className="hidden lg:block">
          <div className="flex items-center justify-evenly gap-x-32 w-full h-[150px] ">
            <div className="flex flex-col gap-3 relative h-[100px] items-center justify-center">
              <img src={im1} alt="productsend" className="w-[50px] h-[50px]" />
              <span className="text-slate-700 text-[11px] font-bold ">
                امکان تحویل اکسپرس
              </span>
            </div>
            <div className="flex flex-col gap-3 relative h-[100px] items-center justify-center">
              <img src={im2} alt="productsend" className="w-[50px] h-[50px]" />
              <span className="text-slate-700 text-[11px] font-bold ">
                امکان پرداخت در محل{" "}
              </span>
            </div>
            <div className="flex flex-col gap-3 relative h-[100px] items-center justify-center">
              <img src={im3} alt="productsend" className="w-[50px] h-[50px]" />
              <span className="text-slate-700 text-[11px] font-bold ">
                7 روزهفته , 24ساعته
              </span>
            </div>
            <div className="flex flex-col gap-3 relative h-[100px] items-center justify-center">
              <img src={im4} alt="productsend" className="w-[50px] h-[50px]" />
              <span className="text-slate-700 text-[11px] font-bold ">
                هفت روز ضمانت بازگشت کالا
              </span>
            </div>
            <div className="flex flex-col gap-1 relative h-[100px] items-center justify-center">
              <img src={im5} alt="productsend" className="w-[70px] h-[70px]" />
              <span className="text-slate-700 text-[11px] font-bold ">
                ضمانت اصل بودن کالا
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-10 justify-between px-5 md:mt-5 md:grid md:grid-cols-2 md:gap-y-5 lg:grid-cols-4">
          <div className="flex flex-col gap-y-3">
            <h1 className="text-black text-[16px] font-bold">با دیجی‌کالا</h1>
            <p className="text-slate-400 text[12px] font-medium cursor-pointer hover:text-slate-600">
              اتاق خبر دیجی‌کالا
            </p>
            <p className="text-slate-400 text[12px] font-medium cursor-pointer hover:text-slate-600">
              فروش در دیجی‌کالا
            </p>
            <p className="text-slate-400 text[12px] font-medium cursor-pointer hover:text-slate-600">
              فرصت‌های شغلی
            </p>
            <p className="text-slate-400 text[12px] font-medium cursor-pointer hover:text-slate-600">
              {" "}
              گزارش تخاف در دیجی کالا
            </p>
            <p className="text-slate-400 text[12px] font-medium cursor-pointer hover:text-slate-600">
              تماس با دیجی کالا
            </p>
            <p className="text-slate-400 text[12px] font-medium cursor-pointer hover:text-slate-600">
              درباره دیجی کالا
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <h1 className="text-black text-[16px] font-bold">خدمات مشتریان</h1>
            <p className="text-slate-400 text[12px] font-medium cursor-pointer hover:text-slate-600">
              پاسخ به پرسش های متداول
            </p>
            <p className="text-slate-400 text[12px] font-medium cursor-pointer hover:text-slate-600">
              رویه بازگرداندن کالا
            </p>
            <p className="text-slate-400 text[12px] font-medium cursor-pointer hover:text-slate-600">
              شرایط استفاده
            </p>
            <p className="text-slate-400 text[12px] font-medium cursor-pointer hover:text-slate-600">حریم خصوصی</p>
            <p className="text-slate-400 text[12px] font-medium cursor-pointer hover:text-slate-600">گزارش باگ</p>
          </div>
          <div className="flex flex-col gap-y-3">
            <h1 className="text-black text-[16px] font-bold">
              راهنمای خرید از دیجی کالا{" "}
            </h1>
            <p className="text-slate-400 text[12px] font-medium cursor-pointer hover:text-slate-600">
              نحوه ثبت سفارش
            </p>
            <p className="text-slate-400 text[12px] font-medium cursor-pointer hover:text-slate-600">
              رویه ارسال سفارش
            </p>
            <p className="text-slate-400 text[12px] font-medium cursor-pointer hover:text-slate-600">شیوه پرداخت</p>
          </div>
          <div className=" flex flex-col gap-y-5 ">
            <h1 className="text-black text-[16px] font-bold ">
              همراه ما باشید{" "}
            </h1>
            <div className="flex justify-between ">
              <div className="text-slate-500 text-[25px] cursor-pointer">
                <FaInstagram />
              </div>
              <div className="text-slate-500 text-[25px] cursor-pointer">
                <BsTwitter />
              </div>
              <div className="text-slate-500 text-[25px] cursor-pointer">
                <BsLinkedin />
              </div>
              <div className="text-slate-500 text-[25px] cursor-pointer">
                <SiAparat />
              </div>
            </div>
            <p className="text-[17px] text-slate-600 font-semibold">
              با ثبت ایمیل از جدید ترین خبر ها با خبر شوید
            </p>
            <div className="flex gap-x-3">
              <input
                type="email"
                placeholder="ایمیل شما"
                className="border-2 w-full border-slate-300 p-3 rounded-lg text-[13px] font-bold bg-slate-200 focus:outline-none"
              />
              <button className="flex items-center justify-center border-2 hover:border-none hover:text-white border-slate-300 p-3 rounded-lg text-[13px] text-slate-700 font-bold bg-slate-200 hover:bg-red-400 focus:outline-none">
                ثبت
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
