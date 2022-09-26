import { NavLink } from "react-router-dom";
import { useAuth } from "../../Provider/AuthProvider";
import { useCart } from "../../Provider/cartProvider";
import digi from "../../img/digicala.png";
const Checkout = () => {
  const auth = useAuth();
  const { total, cart } = useCart();
  return (
    <>
      <div className="w-full  h-[70px] relative flex items-center justify-center mb-5 mt-5">
        <img
          src={digi}
          alt="digimg"
          className="absolute h-[100px] w-[150px] lg:h-[200px] lg:w-[250px]  "
        ></img>
      </div>
      <main className="w-full h-full grid grid-cols-1 lg:grid-cols-2  py-5 2xl:px-3 gap-5">
        {auth ? (
          <>
            <section className="order-1 flex flex-col gap-3 p-3 border-slate-200 border-2 rounded-lg h-fit">
              <p className="font-bold text-slate-700 text-[13px]">
                نام :{auth.name}
              </p>
              <p className="font-bold text-slate-700 text-[13px]">
                ایمیل :{auth.email}
              </p>
              <p className="font-bold text-slate-700 text-[13px]">
                شماره همراه :{auth.phoneNumber}
              </p>
            </section>
            <section className="p-4 order-2 lg:order-3 lg:-mt-72 flex flex-col gap-3  border-slate-200 border-2 rounded-lg h-fit">
              {cart.length ? (
                cart.map((product) => {
                  return (
                    <>
                      <div className="border-b-2 border-slate-200 py-4">
                        <img
                          src={product.image}
                          alt="checkoutimg"
                          className="[w-100px] h-[100px]"
                        />
                        <p className="font-bold text-slate-700 text-[13px]">
                          {" "}
                          کفش مدل :{product.name}
                        </p>
                        <p className="font-bold text-slate-700 text-[13px]">
                          تعداد{" "}
                          <span className="text-red-500">
                            {product.quantity}
                          </span>{" "}
                          عدد
                        </p>
                      </div>
                    </>
                  );
                })
              ) : (
                <>
                 <p className="font-bold text-red-500 text-[13px]">در سبد خرید شما محصولی وجود ندارد</p>
                  <NavLink to="/">
                    <p className="font-bold text-slate-700 text-[13px]">یک سر به فروشگاه میزنم</p>

                  </NavLink>
                </>
              )}
            </section>
            <section className="mb-10 border-2 border-slate-200 p-5 rounded-lg order-3 lg:order-2 lg:w-[340px] lg:mr-auto ">
              {cart && (
                <>
                  <section className="flex flex-col gap-8">
                    <div className="flex w-full justify-between py-3 border-b-2 border-slate-200">
                      <p className="font-bold text-slate-700 text-[13px]">
                        قیمت کالا ها({cart.length})
                      </p>
                      <p className="font-bold text-slate-700 text-[13px]">
                        {" "}
                        {total + 10000 * cart.length} تومان
                      </p>
                    </div>
                    <div className="flex w-full justify-between ">
                      <p className="font-bold text-slate-700 text-[13px]">
                        هزینه ارسال{" "}
                      </p>
                      <p className="font-bold text-slate-700 text-[13px]">
                        رایگان
                      </p>
                    </div>
                    <div className="flex w-full justify-between py-3 border-b-2 border-slate-200">
                      <p className="font-bold text-slate-500 text-[11px]">
                        هزینه ارسال براساس آدرس، زمان تحویل، وزن و حجم مرسوله
                        شما محاسبه شده
                      </p>
                    </div>
                    <div className="flex w-full justify-between py-3 border-b-2 border-slate-200">
                      <p className="font-bold text-red-500 text-[13px]">
                        قابل پرداخت{" "}
                      </p>
                      <p className="font-bold text-red-500 text-[13px]">
                        {" "}
                        {total} تومان
                      </p>
                    </div>
                    <button className="cursor-pointer font-bold hidden w-[300px] m-auto text-red-500 h-[50px] text-lg border-2 border-red-300 p-5  rounded-lg  lg:flex lg:items-center lg:justify-center">
                      انتخاب زمان ارسال
                    </button>
                  </section>
                </>
              )}
            </section>
            <div className=" border-t-2  fixed lg:hidden bottom-0 bg-white md:w-[758px] sm:w-[630px] border-slate-400 w-full h-20 p-3 flex justify-between">
              <button className=" border-2 border-red-300  w-full h-[50px] text-md text-red-500 bg-white rounded-md ">
                انتخاب زمان ارسال
              </button>
              <div className="flex flex-col mr-11 gap-y-1 w-[170px]">
                <h1 className="text-slate-500 text-xs">جمع سبد خرید</h1>
                <span className="text-sm font-bold">{total} تومان </span>
              </div>
            </div>
          </>
        ) : (
          <NavLink to="/signup">
            <p className="w-full 2xl:w-[1500px] text-slate-700 ">
              لطفا ابتدا ثبت نام کنید !
            </p>
          </NavLink>
        )}
      </main>
    </>
  );
};

export default Checkout;

// {cart.map((product) => {
//   return (
//     <>
//       <div className="border-b-2 border-slate-200 py-4">
//         <img
//           src={product.image}
//           alt="checkoutimg"
//           className="[w-100px] h-[100px]"
//         />
//         <p className="font-bold text-slate-700 text-[13px]">
//           {" "}
//           کفش مدل :{product.name}
//         </p>
//         <p className="font-bold text-slate-700 text-[13px]">
//           تعداد{" "}
//           <span className="text-red-500">{product.quantity}</span>{" "}
//           عدد
//         </p>
//       </div>
//     </>
//   );
// })}
