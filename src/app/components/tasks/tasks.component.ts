import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../service/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    CommonModule,
    TaskItemComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent { 
  // the variable defined here will be referenced on the component Template
  taskList: Task[] = [];
  taskService: TaskService = inject(TaskService);
  constructor() { }

  ngOnInit() {
    this.taskService.getAllTasks().subscribe( tasks => {
      this.taskList = tasks;
    });
  }
  
}
