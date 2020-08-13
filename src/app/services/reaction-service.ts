import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ServiceConfig } from '../config/service-config';
import {ReactionModel} from '../models/reaction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  entity = 'publicationReaction';
  // tslint:disable-next-line: ban-types
  // token: String = '';

  constructor(public http: HttpClient) {

  }

  // OBTIENE TODOS LA LISTA DE REACCIONES
  getAllRecords(): Observable<ReactionModel[]>{
    return this.http.get<ReactionModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }

  // GUARDA UNA NUEVA REACCION MEDIANTE EL POST
  // FALTA EL TOKEN DENTRO DEL HEADER
  saveNewRecord(record: ReactionModel): Observable<ReactionModel>{
    return this.http.post<ReactionModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record
    , {
      headers: new HttpHeaders({

      })
    });
  }
  // EDITA UNA REACCION MEDIA EL PUT
  // FALTA EL TOKEN DENTRO DEL HEADER
  editRecord(record: ReactionModel): Observable<ReactionModel>{
    return this.http.put<ReactionModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record
    , {
      headers: new HttpHeaders({

      })
    });
  }
  // ELIMINA UNA REACCION MEDIA EL DELETE
  // FALTA EL TOKEN DENTRO DEL HEADER
  // tslint:disable-next-line: ban-types
  deleteRecord(recordId: String): Observable<any>{
    return this.http.delete(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`, {
      headers: new HttpHeaders({

      })
    });
  }

}
