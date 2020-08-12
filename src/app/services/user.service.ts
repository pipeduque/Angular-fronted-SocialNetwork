import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { ServiceConfig } from '../config/service-config';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  entity = 'user';

  constructor(
    private http: HttpClient
  ) { }

  UserRegistering(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${ServiceConfig.BASE_URL}${this.entity}`, user, {
      headers: new HttpHeaders({ })
    });
  }

  /**
   * Get record by id
   * @param id id to search
   */
  getRecordById(id: String): Observable<UserModel> {
    return this.http.get<UserModel>(`${ServiceConfig.BASE_URL}${this.entity}/${id}`);
  }
}
