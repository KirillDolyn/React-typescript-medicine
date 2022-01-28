import React, { SyntheticEvent, useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import { apiLogIn, IUser } from "../../api";

import s from "./Popup.module.scss";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onUserAuthorized: (user: IUser) => void;
}

export interface IFormData {
  login: string;
  password: string;
}

const Popup = ({ isOpen, onClose, onUserAuthorized }: Props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IFormData>({
    login: "",
    password: "",
  });

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleLogIn = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const user = apiLogIn({
        login: formData.login,
        password: formData.password,
      });

      onUserAuthorized(user);
      onClose();
      navigate("/login");
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <form className={s.popup_form} onSubmit={handleLogIn}>
        <input
          className={s.login}
          type="text"
          placeholder="Login"
          value={formData.login}
          onChange={(e) => setFormData({ ...formData, login: e.target.value })}
        ></input>
        <input
          className={s.password}
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        ></input>

        <button type="submit" className={s.button}>
          Войти
        </button>

        <button onClick={onClose} className={s.button}>
          Закрыть
        </button>
      </form>
    </Modal>
  );
};

export default Popup;
