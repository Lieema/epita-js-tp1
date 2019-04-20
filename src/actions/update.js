import { getState, setState } from "../store";

/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/

const update = (url, index) => {
    let state = getState();
    state[index] = url;
    setState(state);
};

export default update;
