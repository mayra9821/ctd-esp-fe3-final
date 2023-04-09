import { useReducer, useEffect, useState, createContext } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

const FAVS_ACTIONS = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  LIST: "LIST",
};
const THEMES = {
  DARKSIDE: "DARKSIDE",
  LIGTHSIDE: "LIGTHSIDE",
};

const themeInitial = LIGTHSIDE;
const favsInitial = [];

function themeReducer(state, action) {
  switch (action.type) {
    case "TOOGLE": {
      if (state==THEMES.DARKSIDE){
        return THEMES.LIGTHSIDE
      }
      if(state==THEMES.LIGTHSIDE){
        return THEMES.DARKSIDE
      }
    }
    case THEMES.LIGTHSIDE: {
      return THEMES.LIGTHSIDE;
    }
    case THEMES.DARKSIDE: {
      return THEMES.DARKSIDE;
    }
    default: {
      throw new Error(`Unkwon type: ${action.type}`);
    }
  }
}

const favoritesReducer = (state = favsInitial, action) => {
  switch (action.type) {
    case FAVS_ACTIONS.ADD:
      const isPersonInFavorites = state.some(
        (person) => person.id === action.payload.id
      );
      if (isPersonInFavorites) {
        throw new Error(
          `Person with id ${action.payload.id} is already in favorites list`
        );
      }
      return [...state, action.payload];
    case FAVS_ACTIONS.REMOVE:
      const personIndex = state.findIndex(
        (person) => person.id === action.payload.id
      );
      if (personIndex === -1) {
        throw new Error(
          `Person with id ${action.payload.id} is not in favorites list`
        );
      }
      return [...state.slice(0, personIndex), ...state.slice(personIndex + 1)];
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dataDocs, setDataDocs] = useState();
  const [favs, dispatchFavs] = useReducer(favoritesReducer, favsInitial);
  const [actualTheme, dispatchTheme] = useReducer(themeReducer, themeInitial);

  useEffect(() => {
    async function getData() {
      try {
        const docts = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await docts.json();
        setDataDocs(data);
      } catch (e) {
        console.log("🚀 ~ file: global.context.jsx:34 ~ getData ~ e:", e);
      }
    }
    getData();
  }, []);

  return (
    <ContextGlobal.Provider
      value={{ dataDocs, FAVS_ACTIONS, favs, dispatchFavs, THEMES, actualTheme, dispatchTheme }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
