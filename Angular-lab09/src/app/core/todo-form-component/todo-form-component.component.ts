import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../navigation.service';
import { Todo } from '../todo.model';
import { HttpService } from '../httpservice.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-form-component',
  templateUrl: './todo-form-component.component.html',
  styleUrls: ['./todo-form-component.component.scss'],
})
export class TodoFormComponentComponent implements OnInit {
  public todo: Todo = {
    id: '',
    name: '',
    isComplete: false,
  };

  public constructor(
    private navigationService: NavigationService,
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.httpService.getById(id).subscribe((existingTodo: Todo) => {
        this.todo = existingTodo;
      });
    }
  }

  public goBack(): void {
    this.navigationService.goBack();
  }

  public onSubmit(): void {
    if (!this.todo.id) {
      this.todo.id = uuidv4();

      this.httpService.add(this.todo).subscribe(() => {
        this.navigationService.goToTodos();
      });
    } else {
      this.httpService.update(this.todo).subscribe(() => {
        this.navigationService.goBack();
      });
    }
  }
}