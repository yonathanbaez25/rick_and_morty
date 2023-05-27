import { ADD_FAV, REMOVE_FAV } from "../redux/types";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FAV: {
      return {
        myFavorites: [...state.myFavorites, payload],
      };
    }
    case REMOVE_FAV: {
      const filteredMyFavorites = state.myFavorites.filter(
        (myFavorito) => myFavorito.id !== payload
      );
      return {
        ...state,
        myFavorites: filteredMyFavorites,
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
