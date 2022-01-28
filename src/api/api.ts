import db from "./db.json";

interface IApiLoginOptions {
  login: string;
  password: string;
}

export function apiLogIn({ login, password }: IApiLoginOptions) {
  if (password.length < 8) {
    throw new Error("Пароль не может быть менее 8 символов");
  }

  const user = db.users.find(
    (user) => user.login === login && user.password === user.password
  );

  if (user) {
    return user;
  } else {
    throw new Error("Пользователь не найден или неверный пароль");
  }
}
