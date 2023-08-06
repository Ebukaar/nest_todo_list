import { Component, ChangeDetectorRef } from '@angular/core';
import { TasksService } from './tasks.service';

export interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tasks: Task[];
  task: string;
  //eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private taskService: TasksService, private cd: ChangeDetectorRef) {
    this.tasks = [];
    this.task = '';
  }
  title = 'tasks-ui';
  ngOnInit() {
    this.taskService.getTasks().subscribe((data) => {
      console.log(data);
      this.tasks = data as Task[];
    });
  }

  addTask(task: string) {
    this.taskService.addTask(task).subscribe((updatedTasks: Task[]) => {
      console.log("Updated tasks from API:", updatedTasks);
      this.tasks = updatedTasks;  
      this.cd.detectChanges();  // Trigger change detection
      this.task = '';
    });
}

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== id);
       console.log('Task deleted successfully.');
    });
  }
}
