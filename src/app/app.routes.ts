import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NoTaksComponent } from './tasks/no-taks/no-taks.component';

export const routes: Routes = [
    {
        path: '',
        component: NoTaksComponent
    },
    {
        path: 'user/:userId',
        component: TasksComponent
    }
];
