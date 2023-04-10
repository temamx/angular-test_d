import { Component, Input } from '@angular/core';
import { ITask } from 'src/app/types/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() public task: ITask;
}
