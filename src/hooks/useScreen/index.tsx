import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";
import { ScreenTypes, ScreensContextData } from "./types";

const ScreensContext = createContext({} as ScreensContextData);

export type ReactProps = {
  children?: React.ReactElement;
};

export const ScreensProvider: React.FC<ReactProps> = ({ children }) => {
  const [activeScreen, setActiveScreen] = useState<ScreenTypes>(
    ScreenTypes.pokemons
  );

  return (
    <ScreensContext.Provider
      value={{
        activeScreen,
        setActiveScreen,
      }}
    >
      {children}
    </ScreensContext.Provider>
  );
};

export const useScreens = () => useContext(ScreensContext);
