import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../tasks-mock';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  // the variable defined here will be referenced by component template
  @Input() task: Task = TASKS[0]

  faTimes = faTimes;
}
