import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  host = 'http://localhost:3000/api';
  //eslint-disable-next-line @typescript-eslint/no-empty-function

  constructor(private http: HttpClient) { }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.host}/tasks`);
  }
  addTask(todo: string): Observable<Task[]> {
    return this.http.post<Task[]>(`${this.host}/tasks`, {
      name: todo,
      completed: false,
    });
  }
  deleteTask(id:number): Observable<void> {
    return this.http.delete<void>(`${this.host}/tasks/${id}`);
  }
}
