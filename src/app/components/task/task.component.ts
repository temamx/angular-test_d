import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from 'src/app/types/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  public edited: boolean = false;
  @Input() public task: ITask;

  constructor() { }

  @Output() public onRemove: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() public onCompleted: EventEmitter<ITask> = new EventEmitter<ITask>();

  public editTask(newTitle: string): void {
    if (!newTitle) return;
    this.edited = false;
    this.task.title = newTitle;
  }

}
