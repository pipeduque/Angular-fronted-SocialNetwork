import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { PublicationModel } from '../models/publication.model';
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

  getPublicationById(id: String): Observable<PublicationModel[]> {
    return this.http.get<PublicationModel[]>(`${ServiceConfig.BASE_URL}${this.entity}s/${id}/publications`);
  }

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
