import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
 

  title = signal('');
  summary = signal('');
  addTask = output<{title: string, summary: string}>()

  //ngSubmit will handle onSubmit method because the button type=submit
  onSubmit() { 
    this.addTask.emit({title: this.title(), summary: this.summary()})
  }

  onClose() {
    throw new Error('Method not implemented.');
  }

}
