import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, RESET } from "../redux/types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAV: {
      return {
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };
    }
    case REMOVE_FAV: {
      const filteredMyFavorites = state.allCharacters.filter(
        (myFavorito) => myFavorito.id !== payload
      );
      return {
        ...state,
        myFavorites: filteredMyFavorites,
        allCharacters: filteredMyFavorites,
      };
    }
    case FILTER: {
      const filteredNewFilter = state.allCharacters.filter(
        (myFavorito) => myFavorito.gender === payload
      );
      return {
        ...state,
        myFavorites: filteredNewFilter,
      };
    }
    case RESET: {
      return {
        ...state,
        myFavorites: [...state.allCharacters],
      };
    }
    case ORDER: {
      const sortNewOrder = state.allCharacters.sort((a, b) => {
        if (a.id > b.id) {
          return "Ascendente" === payload ? 1 : -1;
        }
        if (a.id < b.id) {
          return "Descendente" === payload ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: sortNewOrder,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
