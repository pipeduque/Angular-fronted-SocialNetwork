import { Component, OnInit, Input } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { ReportModel } from 'src/app/models/report.model';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  reportList: ReportModel[];

  constructor(private reportSr: ReportsService) { }

  ngOnInit(): void {
    this.reportSr.getAllReports().subscribe(
      data => {
        this.reportList = data;
        console.log(this.reportList);
      },
      error => {

      }
    );
  }
}
