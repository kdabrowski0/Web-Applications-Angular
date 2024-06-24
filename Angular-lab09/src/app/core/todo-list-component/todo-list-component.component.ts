import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { HttpService } from '../httpservice.service';
@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.scss'],
})
export class TodoListComponentComponent implements OnInit {
  public todos: Todo[] = [];
  public currentPage: number = 1;
  public itemsPerPage: number = 3;
  public totalItems: number = 0;
  public totalPages: number = 0;

  public constructor(private httpService: HttpService) {}

  public ngOnInit(): void {
    this.loadTodos();
  }

  public loadTodos(): void {
    this.httpService
      .getTodos(this.currentPage, this.itemsPerPage)
      .subscribe((data: Todo[]) => {
        this.todos = data;
        this.totalItems = data.length;
      });
  }
  public delete(id: string): void {
    this.httpService.deleteTodo(id).subscribe(() => {
      this.httpService
        .getTodos(this.currentPage, this.itemsPerPage)
        .subscribe((data: Todo[]) => {
          this.todos = data;
          console.log(this.todos);
        });
    });
  }
  public nextPage(): void {
    this.currentPage++;
    this.loadTodos();
  }

  public previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadTodos();
    }
  }
}
