import React from "react";

import { CgPokemon } from "react-icons/cg";
import { useScreens } from "../../hooks/useScreen";
import { ScreenTypes } from "../../hooks/useScreen/types";
import { Container } from "./styles";

const Header: React.FC = () => {
  const { setActiveScreen } = useScreens();

  return (
    <Container>
      <div>
        <CgPokemon size={35} color="#FECA1B" />
        <span>Pokedex</span>
      </div>
      <div>
        <a onClick={() => setActiveScreen(ScreenTypes.pokemons)}>Pokemons</a>
        <a onClick={() => setActiveScreen(ScreenTypes.berries)}>Berries</a>
      </div>
    </Container>
  );
};

export default Header;
