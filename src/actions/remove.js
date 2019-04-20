import { getState, setState } from "../store";

/*
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const remove = index => {
    let state = getState();
    state.splice(index, 1);
    setState(state);
};

export default remove;
