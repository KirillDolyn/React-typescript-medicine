import React from "react";

import Entrance from "./components/entrance/Entrance";

import { Cards } from "./components/cards/Cards";

interface Props {
  onLoginClick: () => void;
}

export const Home = ({ onLoginClick }: Props) => {
  return (
    <div>
      <Entrance onLoginClick={onLoginClick} />
      <div>
        <Cards />
      </div>
    </div>
  );
};
