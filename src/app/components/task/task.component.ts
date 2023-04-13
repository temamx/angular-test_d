import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ITask } from 'src/app/types/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  public edited: boolean = false;
  @Input() public task: ITask;

  constructor(private httpService: HttpService) { }

  @Output() public onRemove: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() public onCompleted: EventEmitter<ITask> = new EventEmitter<ITask>();

  public editTask(newTitle: string) {
    if (!newTitle) return;
    this.edited = false;
    this.task.title = newTitle;
  }

}
