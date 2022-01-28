import React from 'react';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Cart } from './Cards';
import s from './Card.module.scss';

interface Props {
    carts: Cart,
};

 const Card = ({carts}: Props) => {
     const {icon, service, text} = carts;
  return (
      <div className={s.entrans}>
  <div className={s.card}>
      <div className={s.icon}>
          <GlobalSvgSelector id={icon}/>
      </div>
      <div className={s.service}>{service}</div>
      <div className={s.border}></div>
      <div className={s.text}>{text}</div>
  </div>
  </div>
  )
};

export default Card;
