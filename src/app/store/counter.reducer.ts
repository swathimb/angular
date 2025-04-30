import { createReducer, on } from "@ngrx/store";
import { decrement, increment } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
    initialState, //function used to create reducer
    on(
        increment, // Do not call the action. increment✅ increment()❌
        (currentState, actionProps) => {
            console.log('---', currentState, actionProps)
           return  currentState + actionProps.value 
        }
    ),
    on(
        decrement,
        (currentState, actionProps) => currentState - actionProps.value
    )
); 

/** on() function takes 2 argument
 * 1. action that needs to be listened
 * 2. cb function that should execute when this action is dispatched. 
 * The cb function gets the current state and returns updated state
 * 
 * 
 * Note: Do not mutate the state directly. Always return the updated state value.
 */