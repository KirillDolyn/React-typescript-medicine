import React from "react";

import s from "../../pages/login/LoginPage.module.scss";

interface Props {}

const Contacts = (props: Props) => {
  return (
    <div className={s.loginePage}>
      <div className={s.title}>Контакты</div>
    </div>
  );
};
export default Contacts;
