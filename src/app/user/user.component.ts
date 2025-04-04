import { Component, signal, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  name = input<string>(); //InputSignals
  selectUser = output<any>(); //Output function its not output signals
  isActive = signal(false); 

  onUserClick(event: any) {
    console.log(this.name(), event)
    this.isActive.set(!this.isActive());
    this.selectUser.emit(event)
  }
  
}
