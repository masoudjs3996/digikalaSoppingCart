const Input = ({ label, type = "text", name, formik }) => {
  return (
    <>
      <div className="flex flex-col">
        <label className="mb-2 text-slate-500 font-bold">{label}</label>
        <input
          className={
            formik.errors[name] && formik.touched[name]
              ? "px-5 py-2 w-full bg-slate-100 border-b-2 border-red-500 focus:outline-none"
              : "px-5 py-2 w-full bg-slate-100 border-b-2 border-green-500 focus:outline-none"
          }
          type={type}
          name={name}
          placeholder={label}
          {...formik.getFieldProps(name)}
          {...formik.getFieldProps({ name })}
        />

        {formik.errors[name] && formik.touched[name] && (
          <div className="text-[12px] font-bold text-red-500 ">
            {formik.errors[name]}
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
