import React, { useEffect } from "react";
import { validatorConfig } from "./validatorConfig";
import { useForm } from "../../../hooks/useForm";
import { getAuthSignInError, logIn } from "../../../store/trainers";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from "../../common/form/textField/textField";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginError = useSelector(getAuthSignInError());

  const { handleChange, data, errors, validateBySubmit, setErrors } = useForm(
    {
      email: "",
      password: "",
    },
    validatorConfig
  );
  const isValid = Object.keys(errors).length === 0;
  useEffect(() => {
    setErrors((prevState) => ({ ...prevState, password: loginError }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginError]);
  console.log(errors);
  console.log(loginError);
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateBySubmit();
    console.log(isValid);
    if (!isValid) return;
    console.log(loginError);
    dispatch(logIn({ payload: data })).then(() => {
      navigate("/diary", { replace: true });
    });
  };
  console.log(errors);

  return (
    <>
      <div className="form__login-text">Войди</div>
      <div className="text__main">Чтобы получить доступ ко всем программам</div>
      <form onSubmit={handleSubmit}>
        <TextField
          inputClassName="form-control"
          label=""
          name="email"
          value={data.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Почта"
        />
        <TextField
          inputClassName="form-control"
          label=""
          type="password"
          name="password"
          placeholder="Пароль"
          value={data.password}
          onChange={handleChange}
          error={errors.password}
        />

        <div className="form__btn-container">
          <button className="form__btn">
            <NavLink to={"/login/signup"} className="href">
              Регистрация
            </NavLink>
          </button>
          <button className="form__btn" type="submit" disabled={!isValid}>
            Войти
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
