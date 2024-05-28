import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../tasks-mock';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  getAllTasks(): Observable<Task[]> {
    const tasks$ = of(TASKS);
    return tasks$;
  }
}
