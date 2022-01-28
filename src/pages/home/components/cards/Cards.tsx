import React from "react";
import Card from "./Card";
import s from "./Card.module.scss";

interface Props {}

export interface Cart {
  icon: string;
  service: string;
  text: string;
}

export const Cards = (props: Props) => {
  const cart: Cart[] = [
    {
      icon: "heart",
      service: "Онлайн-прием",
      text: "Рыба текст",
    },
    {
      icon: "earphone",
      service: "Экстренный Случай",
      text: "Рыба текст",
    },
    {
      icon: "story",
      service: "Лечение рака",
      text: "Рыба текст",
    },
  ];
  return (
    <>
      <div className={s.cart}>
        {cart.map((carts: Cart) => (
          <Card carts={carts} />
        ))}
      </div>
    </>
  );
};
