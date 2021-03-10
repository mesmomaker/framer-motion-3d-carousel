import React, { createContext, useReducer, Children } from "react";

export const Context = createContext(null);

export const ContextProvider = ({ children, middleNum }) => {
  const ADD_ITEM = "ADD_ITEM";
  const SET_ACTIVE_ITEM = "SET_ACTIVE_ITEM";
  //const count = Children.count(children);
  //console.log(count)
  //const countArray = Children.toArray(children).length;
  //const middle = Math.round(count / 2).toArray();
  const initialState = {
    items: [],
    activeItem: { middleNum }
  };

  function reducer(state, action) {
    switch (action.type) {
      case ADD_ITEM:
        return {
          ...state,
          items: [...state.items, action.item]
        };
      case SET_ACTIVE_ITEM:
        console.log(action.activeItem);
        return {
          ...state,
          activeItem: action.activeItem
        };
      default:
        return initialState;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
