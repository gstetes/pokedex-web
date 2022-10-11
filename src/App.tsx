import React from "react";
import PokemonsList from "./components/PokemonsList";
import Header from "./components/Header";
import { PokemonsProvider } from "./hooks/usePokemons";
import { ScreensProvider, useScreens } from "./hooks/useScreen";
import { ScreenTypes } from "./hooks/useScreen/types";
import BerriesList from "./components/BerriesList";

const App: React.FC = () => {
  const { activeScreen } = useScreens();

  return (
    <>
      <Header />
      {activeScreen === ScreenTypes.pokemons && <PokemonsList />}
      {activeScreen === ScreenTypes.berries && <BerriesList />}
    </>
  );
};

export default App;
