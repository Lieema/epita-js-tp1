import { setState, getState } from "../store";

/*
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/

const add = els => {
    const state = getState().concat([].concat(els));
    setState(state);
};

export default add;
