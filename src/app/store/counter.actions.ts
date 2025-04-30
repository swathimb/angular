import { createAction, props } from "@ngrx/store";

export const increment = createAction(
    '[Counter] Increment', //Unique Indentifier type
    props<{value: number}>() //<{}>
) 
//These actions are used in reducer


export const decrement = createAction(
    '[Counter] Decrement',
    props<{value: number}>()
)

export const init = createAction(
    '[Counter] Init'
)