import { createContext, useContext, useReducer } from "react";
import DarkModeReducer, { DarkModeAction } from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
  dispatch: (action: DarkModeAction) => {},
};

export const DarkModeContext = createContext(INITIAL_STATE);

interface ProviderProps {
  children?: React.ReactNode;
}
export const DarkModeContextProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(DarkModeReducer, { darkMode: false });
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

interface DarkModeToggle {
  darkMode: boolean;
  toggle: () => void;
  dark: () => void;
  light: () => void;
}

export const useDarkMode = (): DarkModeToggle => {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  return {
    darkMode: darkMode,
    toggle: () => {
      dispatch({ type: "TOGGLE" });
    },
    dark: () => {
      dispatch({ type: "DARK" });
    },
    light: () => {
      dispatch({ type: "LIGHT" });
    },
  };
};
