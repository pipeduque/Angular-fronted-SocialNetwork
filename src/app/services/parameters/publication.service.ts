import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PublicationModel } from '../../models/parameters/publication.model';
import { ServiceConfig } from '../../config/service-config';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  entity = 'publication';
  // tslint:disable-next-line: ban-types
  // token: String = '';

  constructor(public http: HttpClient) {

  }

  // OBTIENE TODOS LA LISTA DE PUBLICACIONES
  getAllRecords(): Observable<PublicationModel[]>{
    return this.http.get<PublicationModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }

  // GUARDA UNA NUEVA PUBLICACION MEDIANTE EL POST
  // FALTA EL TOKEN DENTRO DEL HEADER
  saveNewRecord(record: PublicationModel): Observable<PublicationModel>{
    return this.http.post<PublicationModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record
    , {
      headers: new HttpHeaders({

      })
    });
  }
  // EDITA UNA PUBLICACION MEDIA EL PUT
  // FALTA EL TOKEN DENTRO DEL HEADER
  editRecord(record: PublicationModel): Observable<PublicationModel>{
    return this.http.put<PublicationModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record
    , {
      headers: new HttpHeaders({

      })
    });
  }
  // ELIMINA UNA PUBLICACION MEDIA EL DELETE
  // FALTA EL TOKEN DENTRO DEL HEADER
  // tslint:disable-next-line: ban-types
  deleteRecord(recordId: String): Observable<any>{
    return this.http.delete(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`, {
      headers: new HttpHeaders({

      })
    });
  }

}
