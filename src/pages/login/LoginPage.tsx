import React from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../api";
import s from "./LoginPage.module.scss";

interface Props {
  user?: IUser;
  onLogOutClick: () => void;
}

const LoginPage = (props: Props) => {
  return (
    <div className={s.loginePage}>
      <div className={s.title}>Привет, {props.user?.name}</div>
      <Link to="/">
        <button className={s.button} onClick={props.onLogOutClick}>
          Выйти из аккаунта
        </button>
      </Link>
      <Link to="contacts">
        <button className={s.contacts}> Перейти в контакты</button>
      </Link>
    </div>
  );
};
export default LoginPage;
