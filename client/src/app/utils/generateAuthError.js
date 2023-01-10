export function generateAuthError(message) {
  switch (message) {
    case "INVALID_PASSWORD":
      return "Email или пароль введены некорректно";
    case "EMAIL_EXISTS":
      return "Пользователь с таким Email уже существует";
    case "INVALID_DATA":
      return "Проверьте правильность email или пароля";
    default:
      return "Слишком много попыток входа. Попробуйте позже";
  }
}
