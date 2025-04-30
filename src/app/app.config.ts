import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from './store/counter.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideStore({
    counter: counterReducer //registering the reducer key: value pair
  }), 
  provideEffects([CounterEffects])]
};
