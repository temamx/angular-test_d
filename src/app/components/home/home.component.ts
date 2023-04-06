import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { ITask } from 'src/app/types/task.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public tasks: ITask[];
	public isLoading: boolean;
	private unsubscribe$: Subject<void> = new Subject();

  constructor(private httpService: HttpService) {}

  public getTodos(): void {
    this.httpService
                .getTodos()
                .pipe(
                  tap((response: ITask[]) => {
                  this.tasks = response;
                  this.isLoading = false;
                  }),       
                  takeUntil(this.unsubscribe$)
                )
                .subscribe(); 
  }

  ngOnInit(): void {
    this.getTodos();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
		this.unsubscribe$.complete();
  }
}
