import { createSelector } from "@ngrx/store";

export const selectCount = (state: { counter: number}) => state.counter;
// export const selectDoubleCount = (state: { counter: number}) => state.counter * 2; // One way of doing

export const selectDoubleCount = createSelector(
    selectCount,
    (currentStateOfSelectCount) => currentStateOfSelectCount * 2
);
//creating selector by using the selectCount selector value
