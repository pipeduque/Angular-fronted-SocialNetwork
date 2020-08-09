import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomModel } from '../../models/parameters/room.model';
import { ServiceConfig } from '../../config/service-config';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  entity = 'rooms';
  // tslint:disable-next-line: ban-types
  // token: String = '';

  constructor(public http: HttpClient) {

  }

  // OBTIENE TODOS LA LISTA DE ROOMS
  getAllRecords(): Observable<RoomModel[]>{
    return this.http.get<RoomModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }

  // // GUARDA UNA NUEVA PUBLICACION MEDIANTE EL POST
  // // FALTA EL TOKEN DENTRO DEL HEADER
  // saveNewRecord(record: RoomModel): Observable<RoomModel>{
  //   return this.http.post<RoomModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record
  //   , {
  //     headers: new HttpHeaders({

  //     })
  //   });
  // }
  // // EDITA UNA PUBLICACION MEDIA EL PUT
  // // FALTA EL TOKEN DENTRO DEL HEADER
  // editRecord(record: RoomModel): Observable<RoomModel>{
  //   return this.http.put<RoomModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record
  //   , {
  //     headers: new HttpHeaders({

  //     })
  //   });
  // }
  // // ELIMINA UNA PUBLICACION MEDIA EL DELETE
  // // FALTA EL TOKEN DENTRO DEL HEADER
  // // tslint:disable-next-line: ban-types
  // deleteRecord(recordId: String): Observable<any>{
  //   return this.http.delete(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`, {
  //     headers: new HttpHeaders({

  //     })
  //   });
  // }

}
