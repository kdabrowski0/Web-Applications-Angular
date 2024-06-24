import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
} from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from './httpservice.service';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoDetailsResolver implements Resolve<Observable<Todo>> {
  public constructor(private httpService: HttpService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<Todo> {
    const id: string = route.params['id'];

    return this.httpService.getById(id);
  }
}
