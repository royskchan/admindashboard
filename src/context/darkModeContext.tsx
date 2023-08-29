import { createContext, useContext, useReducer } from "react";
import DarkModeReducer, { DarkModeAction } from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
  dispatch: (action: DarkModeAction) => {},
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(DarkModeReducer, { darkMode: false });
  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

interface ModeToggle {
  toggle: () => void;
  dark: () => void;
  light: () => void;
}

export const useDarkMode = (): ModeToggle => {
  const { dispatch } = useContext(DarkModeContext);
  return {
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
