import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CounterControlsComponent } from "./counter-controls/counter-controls.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { Store } from '@ngrx/store';
import { init } from './store/counter.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, CounterControlsComponent, CounterOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  private store: Store<{counter: number}> = inject(Store);
  ngOnInit(): void {
    this.store.dispatch(init())
  }
  
  name = signal<string | null>(null) //signals

  onSelectUser(event:string) {
    this.name.set(event) //setting the signals
  }

  onClick() {
    console.log('clicked')
  }
}
