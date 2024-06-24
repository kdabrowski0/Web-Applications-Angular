import { Component } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Todo } from '../todo.model';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../httpservice.service';
@Component({
  selector: 'app-todo-details-component',
  templateUrl: './todo-details-component.component.html',
  styleUrls: ['./todo-details-component.component.scss'],
})
export class TodoDetailsComponentComponent {
  public todo: Todo;

  public constructor(
    private navigationService: NavigationService,
    private route: ActivatedRoute,
    private httpService: HttpService,
  ) {
    this.todo = this.route.snapshot.data['todo'];
  }

  public goBack(): void {
    this.navigationService.goBack();
  }
  public delete(id: string): void {
    this.httpService.deleteTodo(id).subscribe(() => {
      this.navigationService.goToTodos();
    });
  }
}
