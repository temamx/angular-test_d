import { Injectable, Input } from '@angular/core';
import { ITask } from '../types/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  @Input() public tasks: ITask[];
  constructor() { }

  // public addTask(title: string) {
    
  // }
}
