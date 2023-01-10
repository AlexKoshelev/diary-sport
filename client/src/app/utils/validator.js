export function validator(data, config) {
  const errors = {};
  function validate(validateMethod, data, config) {
    let statusValidate;
    switch (validateMethod) {
      case "isRequired": {
        if (typeof data === "boolean") {
          statusValidate = !data;
        } else {
          statusValidate = data.trim() === "";
        }
        break;
      }
      case "isEmail": {
        const emailRegExp = /^\S+@\S+\.\S+$/g;
        statusValidate = !emailRegExp.test(data);
        break;
      }
      case "isCapitalSymbol": {
        const capitalRegExp = /[A-Z]+/g;
        statusValidate = !capitalRegExp.test(data);
        break;
      }
      case "isContainDigit": {
        const digitRegExp = /\d+/g;
        statusValidate = !digitRegExp.test(data);
        break;
      }
      case "min": {
        statusValidate = data.length < config.value;
        break;
      }
      default:
        break;
    }
    if (statusValidate) return config.message;
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}

/* export const validator = (data, config) => {
  const errors = {};
  function validate(validateMethod, data, config) {
    switch (validateMethod) {
      case "isRequired":
        if (data.toString().trim() === "") return config.message;
        console.log(data);
        break;
      case "isEmail":
        if (!/^\S+@\S+\.\S+$/g.test(data)) return config.message;
        break;
      case "isContainDigit":
        if (!/\d/g.test(data)) return config.message;
        break;
      case "isContainCapitalSymbol":
        if (!/[A-Z]/g.test(data)) return config.message;
        break;
      case "min":
        if (data.length < config.params) return config.message;
        break;
      case "max":
        if (data.length > config.params) return config.message;
        break;
      case "isEnd":
        if (!/[A-Z]+/g.test(data)) return config.message;
        break;
      case "notThePast": {
        if (data.toString().length) {
          if (data.getTime() < config.params) {
            return config.message;
          }
        }
        break;
      }
      case "isCorrectDate": {
        if (data.toString() === "Invalid Date") return config.message;
        break;
      }

      default:
        return config.message;
    }
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (!errors[fieldName] && error) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
};
 */
