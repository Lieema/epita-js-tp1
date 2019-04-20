import { getState } from "../store";

/*
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const get = i => getState()[i];

export default get;
