import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../shared/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentsEndpoint {
  private apiUrl: string = 'http://localhost:8080/api/comments';

  public constructor(private http: HttpClient) {}

  public getAllCommentsByCarId(carId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.apiUrl}/car/${carId}`);
  }

  public deleteComment(commentId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${commentId}`);
  }

  public addComment(carId: string, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.apiUrl}/car/${carId}`, comment);
  }
}