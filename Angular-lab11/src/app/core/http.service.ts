import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public constructor(private http: HttpClient) {}

  public url = 'http://localhost:3000/todo';
  public getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }
    
}

