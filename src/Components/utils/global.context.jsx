import { useReducer, useEffect, useState, createContext } from "react";

export const ContextGlobal = createContext(undefined);

const FAVS_ACTIONS = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  LIST: "LIST",
};
const THEMES = {
  DARKSIDE: "dark",
  LIGTHSIDE: "primary",
};
export const initialState = { theme: THEMES.LIGTHSIDE, data: [] };

// Guardar cambios en localStorage
const updLocStrgFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

function themeReducer(state, action) {
  switch (action.type) {
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

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case FAVS_ACTIONS.ADD:
      const favorites = state;
      const newFavorites = favorites.concat(action.payload);
      console.log(
        "🚀 ~ file: global.context.jsx:44 ~ favoritesReducer ~ state:",
        state
      );
      console.log(
        "🚀 ~ file: global.context.jsx:61 ~ favoritesReducer ~ newFavorites:",
        newFavorites
      );
      updLocStrgFavorites(newFavorites);
      return newFavorites;

    case FAVS_ACTIONS.REMOVE:
      const personIndex = state.findIndex(
        (person) => person.id === action.payload.id
      );
      const updatedFavorites = [
        ...state.slice(0, personIndex),
        ...state.slice(personIndex + 1),
      ];
      updLocStrgFavorites(updatedFavorites);
      return updatedFavorites;
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dataDocs, setDataDocs] = useState(initialState.data);
  const favsInitial = JSON.parse(localStorage.getItem("favorites"));
  const [favs, dispatchFavs] = useReducer(favoritesReducer, favsInitial);
  const [actualTheme, dispatchTheme] = useReducer(
    themeReducer,
    initialState.theme
  );

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
      value={{
        dataDocs,
        FAVS_ACTIONS,
        favs,
        dispatchFavs,
        THEMES,
        actualTheme,
        dispatchTheme,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
