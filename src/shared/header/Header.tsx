import React from "react";
import { Link } from "react-router-dom";

import { IUser } from "../../api";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";

import s from "./Header.module.scss";

interface Props {
  onLoginClick: () => void;
  onLogOutClick: () => void;
  user?: IUser;
}

function Header(props: Props) {
  console.log(props.user, "U");

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="logo-svg" />
        </div>
      </div>
      <div className={s.wrapper}>
        <Link to="contacts">
          <button className={s.contacts}>Контакты</button>
        </Link>
        {!props.user && (
          <button className={s.button} onClick={props.onLoginClick}>
            Войти
          </button>
        )}
        {!!props.user && (
          <button className={s.button} onClick={props.onLogOutClick}>
            Выйти
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
