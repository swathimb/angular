import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent {
  
  count$: Observable<number>;
  doubleCount$: Observable<number>;

  private store: Store<{counter: number}> = inject(Store);
  
  constructor() {
    // this.count$ = this.store.select('counter') //without selector. 'counter' is the key that is registered in provideStore in main.ts
    this.count$ = this.store.select(selectCount) //Using selectors
    this.doubleCount$ = this.store.select(selectDoubleCount)
  }
    
}
