import { useEffect, useState } from "react";
import { validator } from "../utils/validator";

export const useForm = (initialState, config) => {
  const [data, setData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [lastChangeName, setLastChangeName] = useState();

  useEffect(() => {
    if (config) {
      validate();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    setLastChangeName(target.name);
  };
  const validate = () => {
    const errors = validator(data, config);
    const errorsUser = {};
    Object.keys(data).forEach((item) => {
      if (errors[item] && data[item].toString().length > 0) {
        errorsUser[item] = errors[item];
      }
    });
    setErrors(errorsUser);
    return Object.keys(errors).length === 0;
  };
  const validateBySubmit = () => {
    const errors = validator(data, config);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  return {
    setData,
    handleChange,
    validate,
    data,
    validateBySubmit,
    errors,
    setErrors,
    lastChangeName,
  };
};
