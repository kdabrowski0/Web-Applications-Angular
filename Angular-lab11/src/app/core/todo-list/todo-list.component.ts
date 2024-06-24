import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
    public todos: Todo[] = [];
    public constructor(private httpService: HttpService) {
      this.httpService.getTodos().subscribe((todos) => {
        this.todos = todos;
      });
    }
}
