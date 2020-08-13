import { Component, OnInit, Input } from '@angular/core';
import { ReportModel } from 'src/app/models/report.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @Input() report: ReportModel  
  

  constructor() { }

  ngOnInit(): void {
  }

}
