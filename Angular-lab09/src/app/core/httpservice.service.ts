import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public constructor(private http: HttpClient) {}

  public url: string = 'http://localhost:3000/todo';

  public getTodos(page: number, itemsPerPage: number): Observable<Todo[]> {
    const params: HttpParams = new HttpParams()
      .set('_page', page.toString())
      .set('_limit', itemsPerPage.toString());

    return this.http.get<Todo[]>(this.url, { params });
  }
  public deleteTodo(id: string): Observable<Todo[]> {
    return this.http.delete<Todo[]>(`${this.url}/${id}`);
  }
  public add(todo: Todo): Observable<Todo[]> {
    return this.http.post<Todo[]>(this.url, todo);
  }
  public getById(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/${id}`);
  }
  public update(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.url}/${todo.id}`, todo);
  }
}
