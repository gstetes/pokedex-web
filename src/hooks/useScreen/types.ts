import { Dispatch, SetStateAction } from "react";

export enum ScreenTypes {
  pokemons = 'pokemons',
  berries = 'berries'
};

export interface ScreensContextData {
  activeScreen: ScreenTypes;
  setActiveScreen: Dispatch<SetStateAction<ScreenTypes>>
};