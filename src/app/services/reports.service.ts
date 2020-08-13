import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ReportModel } from '../models/report.model';
import { ServiceConfig } from '../config/service-config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  entity = 'report';

  constructor(private http: HttpClient) { }

  ReportUser(report: ReportModel): Observable<ReportModel> {
    return this.http.post<ReportModel>(`${ServiceConfig.BASE_URL}${this.entity}`, report, {
      headers: new HttpHeaders({ })
    });
  }

  getAllReports(): Observable<ReportModel[]>{
    return this.http.get<ReportModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }


}
