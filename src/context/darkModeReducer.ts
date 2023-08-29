export interface DarkModeState {
  darkMode: boolean;
}

export interface DarkModeAction {
  type: string;
}

const DarkModeReducer = (state: DarkModeState, action: DarkModeAction) => {
  switch (action.type) {
    case "LIGHT": {
      return {
        darkMode: false,
      };
    }
    case "DARK": {
      return {
        darkMode: true,
      };
    }
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
