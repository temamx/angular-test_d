import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from '../types/task.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public isLoading: boolean;
	private readonly url: string;

  constructor(private _http: HttpClient) {
    this.isLoading = true;
		this.url = 'https://jsonplaceholder.typicode.com/todos';
  }

  public getTodos(): Observable<ITask[]> {
    return this._http.get<ITask[]>(this.url);
  }
}
