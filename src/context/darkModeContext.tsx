import { createContext, useContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
  dispatch: (action: any) => {},
};

export const DarkModeContext = createContext(INITIAL_STATE);

export const DarkModeContextProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
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
