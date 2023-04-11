import { Component, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ITask } from 'src/app/types/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() public task: ITask;
  public edited: boolean = false;

  constructor(private httpService: HttpService) { }

  public editTask(newTitle: string) {
    if (!newTitle) return;
    this.edited = false;
    this.task.title = newTitle;
  }

  public removeTask(todo: ITask) {
    this.httpService.onRemove(todo);
  }

  public changeStatus(todo: ITask) {
    this.httpService.onCompleted(todo);
    this.task.completed = !this.task.completed;
  }
}
