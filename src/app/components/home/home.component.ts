import { ChangeDetectorRef, Component } from '@angular/core';
import { Subject, tap, takeUntil, take, Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { ITask } from 'src/app/types/task.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public inputTitle = '';
  public taskDone: boolean = true;
  public task: ITask;
  public tasks: ITask[];
  public randomTasks: ITask[];
	public isLoading: boolean = true;
	private unsubscribe$: Subject<void> = new Subject();

  constructor(private httpService: HttpService) {}

  public getRandomTodos(todos: ITask[], count: number): ITask[] {
    let randomTodos: ITask[] = [];
    for (let i = 0; i < count; i++) {
      let randomIndex = Math.floor(Math.random() * todos.length);
      randomTodos.push(todos[randomIndex]);
    }
    return randomTodos;
  }

  // public checkChanges(tasks: ITask[]): void {
  //   this.randomTasks = tasks;
  // }

  public getTodos(): void {
    this.httpService
    .getTodos()
    .pipe(
      tap((response: ITask[]) => {
      this.tasks = response;
      this.randomTasks = this.getRandomTodos(this.tasks, 10);
      this.isLoading = false;
      }),       
      takeUntil(this.unsubscribe$)
    )
    .subscribe(); 
  }

  // Доработать функцию
  public onCreateTask(inputTitle: string): void {
    this.httpService.onCreate(inputTitle)?.subscribe(
      () => {
        const newTask = {
          title: inputTitle,
          completed: false,
        }
        this.randomTasks.push(newTask);
        console.log(this.randomTasks);
      }
    );
    this.inputTitle = '';
  }

  public onRemove(task: ITask): void {
    this.httpService.onRemove(task).subscribe(
      () => {
        this.randomTasks = this.randomTasks.filter(todo => todo.id !== task.id);
        console.log(this.randomTasks);
      }
    );
  }

  public onCompleted(task: ITask): void {
    this.httpService.onCompleted(task).subscribe(
      () => {
        this.randomTasks = this.randomTasks.map(todo => {
          if (todo.id === task.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      }
    );
  }

  ngOnInit(): void {
    this.getTodos();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
		this.unsubscribe$.complete();
  }
}
