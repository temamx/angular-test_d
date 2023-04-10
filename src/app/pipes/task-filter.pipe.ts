import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../types/task.interface';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: ITask[], value: boolean): ITask[] {
    return tasks.filter(task => task.completed === value);
  }
}
