import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

import { Observable } from 'rxjs/observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {
  private userUrl = 'http://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.userUrl)
      .pipe(
        catchError(this.handleError('getUsers', []))
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.httpClient.get<User>(url)
        .pipe(
            catchError(this.handleError<User>(`getUser id=${id}`))
        );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

}
