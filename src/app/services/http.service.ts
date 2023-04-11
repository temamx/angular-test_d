import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable, Subscription, take } from 'rxjs';
import { ITask } from '../types/task.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  @Input() inputTitle: string;
  public taskList: ITask[];
  public isLoading: boolean;
	private readonly url: string;

  constructor(private _http: HttpClient) {
    this.isLoading = true;
		this.url = 'https://jsonplaceholder.typicode.com/todos';
  }

  public getTodos(): Observable<ITask[]> {
    return this._http.get<ITask[]>(this.url);
  }

  public onCreate(inputTitle: string): void {
    if (inputTitle) {
      this._http.post<ITask>(this.url, {
        title: inputTitle,
        completed: false
      }).subscribe();
    }
  }

  public onRemove(todoOnDelete: ITask): void {
    this._http.delete<ITask>(`${this.url}/${todoOnDelete.id}`).subscribe(
      ()=> {
        if (this.taskList) {
          this.taskList = this.taskList.filter(todo => todo.id !== todoOnDelete.id)
          console.log(this.taskList);
        }
      }
    );
  }

  public onCompleted(todo: ITask): void {
    this._http.put<ITask>(`${this.url}/${todo.id}`, {
      title: todo.title,
      completed: !todo.completed
    }).subscribe();
  }


}
