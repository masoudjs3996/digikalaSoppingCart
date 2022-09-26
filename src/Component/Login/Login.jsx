import Input from "../../common/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import imgDigi from "../../img/digicala.png";
import { NavLink, withRouter } from "react-router-dom";
import { loginUser } from "../../services/loginService";
import { useState } from "react";
import { useAuth, useAuthActions } from "../../Provider/AuthProvider";
import { useQuery } from "../../Hooks/useQuery";
import { useEffect } from "react";
const LoginForm = ({ history }) => {
  // access to the function query
  const query = useQuery();
  const redirect = query.get("redirect") || "/";
  const initialValues = {
    email: "",
    password: "",
  };
  // this state for text error
  const [error, setError] = useState(null);
  // access to the set state of auth context
  const setAuth = useAuthActions();
  // access to the auth
  const auth = useAuth();
  // add use effect for
  useEffect(() => {
    if (auth) history.push(redirect);
  }, [redirect, auth]);

  // this is for on submit this function get initial props and thats is vause in form
  const onSubmit = async (valuse) => {
    try {
      const { data } = await loginUser(valuse);
      // in here we add data in state auth
      setAuth(data);
      // // and save data in locall storage
      // localStorage.setItem("authState",JSON.stringify(data))
      setError(null);
      history.push(redirect);
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };
  // this is validateionScema with helps Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("ایمیل باید معتبر باشد ")
      .required("وارد کردن ایمیل ضروری است "),
    password: Yup.string().required("پسورد خود را وارد کنید "),
  });
  const formik = useFormik({
    // in here we use jost one name in orginal initialvaluse : initailsvaluse or on suubmit : onsubmit
    //  we use one name becuse key and valuse tha same
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="w-full mt-20 flex justify-center px-5 mb-24 md:mb-0 ">
      <form
        onSubmit={formik.handleSubmit}
        className="border-2 border-slate-200 flex flex-col gap-y-8 px-5 py-10 w-[400px]"
      >
        <img src={imgDigi} alt="digicala" className="w-32 h-20 m-auto" />
        <div className="grid grid-cols-1 gap-y-2">
          <h1 className="text-lg font-bold text-slate-700">ورود | ثبت نام</h1>
          <h1 className="text-[12px] text-slate-700 font-bold">سلام!</h1>
          <h1 className="text-[12px] text-slate-700 font-bold">
            لطفا تمامی فیلد ها را با دقت پر کنید{" "}
          </h1>
        </div>
        <Input name="email" label="ایمیل" formik={formik} type="email" />
        <Input
          name="password"
          label="رمز عبور "
          formik={formik}
          type="password"
        />
        <button
          className="bg-red-500  text-white font-bold  w-full py-3 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:bg-red-300"
          disabled={!formik.isValid}
        >
          ورود
        </button>
        {error && <p className="text-red-500 ">{error}</p>}
        <NavLink to={`/signup?redirect=${redirect}`}>
          <p className="text-blue-700">هنوز ثبت نام نکردم !</p>
        </NavLink>
      </form>
    </div>
  );
};

export default withRouter(LoginForm);
