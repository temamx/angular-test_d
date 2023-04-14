import { Pipe, PipeTransform } from '@angular/core';
import { ITask } from '../types/task.interface';

@Pipe({
  name: 'sortTitle'
})
export class SortTitlePipe implements PipeTransform {
  transform(titles: ITask[]): ITask[] {
    return titles.sort((a, b) => a.title.localeCompare(b.title));
  }
}
