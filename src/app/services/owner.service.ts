import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceConfig } from '../config/service-config';
import { RoomModel } from '../models/parameters/room.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  entity = 'owner';

  constructor(private http: HttpClient) { }

  
  getRoomsById(id: String): Observable<RoomModel[]> {
    return this.http.get<RoomModel[]>(`${ServiceConfig.BASE_URL}${this.entity}s/${id}/rooms`);
  }
}
