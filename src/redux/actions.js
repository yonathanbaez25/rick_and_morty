import { ADD_FAV, FILTER, REMOVE_FAV, RESET } from "./types";

export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: FILTER,
    payload: order,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

/*
filterCards: esta función recibe por parámetro un gender. Debe retornar una action con el type igual a "FILTER" y el payload será igual al parámetro recibido.

orderCards: esta función recibe por parámetro un orden (será: A: ascendente o D: descendente). Debe retornar una action con el type igual a "ORDER" y el payload será igual al parámetro recibido.
*/
