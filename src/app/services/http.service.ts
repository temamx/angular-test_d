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

  public onCreate(inputTitle: string): Observable<ITask> | undefined {
    if (inputTitle) {
      return this._http.post<ITask>(this.url, {
        title: inputTitle,
        completed: false
      })
    } else return;
  }

  public onRemove(todoOnDelete: ITask): Observable<ITask> {
    return this._http.delete<ITask>(`${this.url}/${todoOnDelete.id}`)
  }

  public onCompleted(todo: ITask): Observable<ITask> {
    return this._http.put<ITask>(`${this.url}/${todo.id}`, {
      title: todo.title,
      completed: !todo.completed
    })
  }
}
