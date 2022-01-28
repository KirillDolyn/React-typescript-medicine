import React from "react";
import { Link } from "react-router-dom";

import s from "./Entrance.module.scss";

interface Props {
  onLoginClick: () => void;
}

const Entrance = (props: Props) => {
  return (
    <div className={s.entrans}>
      <div className={s.title}>Место для получения медицинской помощи</div>

      <button onClick={props.onLoginClick} className={s.registration}>
        Войти
      </button>
      <Link to="contacts">
        <button className={s.contacts}> Контакты</button>
      </Link>
    </div>
  );
};

export default Entrance;
