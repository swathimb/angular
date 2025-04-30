import { Component, input, signal } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

  //defining tailwing css string in ts
  addTaskCssString = "m-4 p-2 rounded-md bg-indigo-300 shadow-lg shadow-indigo-500/50 hover:bg-indigo-500"
  selectedUser = input<string| null>(); //InputSignals
  isDialogOpen = signal(false);

  userId = input<string>(); // router Input Binding

  tasks = signal<{title: string, summary: string}[]>([{
    title: "Task 1",
    summary: "Learn Angular"
  }, {
    title: "Task 2",
    summary: "Learn React"
  }, {
    title: "Task 3",
    summary: "Learn nextJS"
  }])

  onAddTask(event: any) {
    console.log(event, this.tasks())
    this.tasks().push(event)
  }

  onClickTask() {
    console.log('--', this.selectedUser())
    this.isDialogOpen.set(true)
  }
}
