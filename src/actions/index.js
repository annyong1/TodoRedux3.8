/*
 *action types
 */

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

/*
 *action creators
 */

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const toggleTodo = (index) => ({
  type: TOGGLE_TODO,
  index,
});

export const removeTodo = (text) => ({
  type: REMOVE_TODO,
  text,
});
