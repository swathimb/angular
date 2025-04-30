import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { increment, init } from "./counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { selectCount } from "./counter.selectors";


@Injectable()
export class CounterEffects {
    private actions$ = inject(Actions);
    private store = inject(Store)

    saveCount = createEffect(() => this.actions$.pipe(
        ofType(increment), //'[Counter] Increment'
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => console.log('Incremented', action, counter))
    ), {dispatch: false}) // means this effect doesnt dispatch new action once they are done

    loadCount = createEffect(() => this.actions$.pipe(
        ofType(init),
        switchMap(() => {
            return of(increment({value: 4}))
        })
    ))

    constructor(){}
}

/** 
 * saveCount/loadCount manually called.

    NgRx detects and subscribes to it automatically when CounterEffects is registered.

    You just define what it should do, and NgRx takes care of running it.

 * Why are Effects written as Class and not standalone function like action/reducer
  
    Actions/Reducers/Selectors are just definitions of what happened — plain JS/TS constants with no side effects. 
    They're used to describe an event and don’t need any services or external data.
 
    Effects on the other hand are impure — they handle side effects and do things — like:
    Making API calls, Dispatching follow-up actions, Listening for actions, Accessing services
    This means they require Angular services
    And only classes can use Angular's Dependency Injection (DI) to inject services.

 * Why is it written like this increment({value: 4}) in effect and 
    like this this.store.dispatch(increment({value: 2})) in component

    Inside an NgRx effect, you're returning an Observable of an Action, and NgRx automatically dispatches whatever you emit from the createEffect(...) function..
    NgRx is already set up to dispatch actions emitted by effects

    In components we manual dispatch
 */