import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  standalone: true,
  imports: [],
  templateUrl: './counter-controls.component.html',
  styleUrl: './counter-controls.component.scss'
})
export class CounterControlsComponent {

  private store: Store<{counter: number}> = inject(Store);

  increment() {
    this.store.dispatch(increment({value: 2})) // Its important to call the function increment(props)✅ increment❌
  }

  decrement() {
    this.store.dispatch(decrement({value: 1}))
  }
}
