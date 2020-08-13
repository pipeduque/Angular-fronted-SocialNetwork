import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsConfig } from 'src/app/config/forms-config';
import { ReportModel } from 'src/app/models/report.model';
import { SecurityService } from 'src/app/services/security.service';
import { ReportsService} from 'src/app/services/reports.service'
import { Router, ActivatedRoute } from '@angular/router';

declare const showMessage: any;

@Component({
  selector: 'app-report-user',
  templateUrl: './report-user.component.html',
  styleUrls: ['./report-user.component.css']
})
export class ReportUserComponent implements OnInit {

  fgValidator: FormGroup;
  reportMinLength = FormsConfig.REPORT_MIN_LENGTH;

  constructor(
    private fb: FormBuilder, 
    private securitySc: SecurityService,
    private reportSc: ReportsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formBuilding();
  }

  formBuilding() {
    this.fgValidator = this.fb.group({
      text: ['', [Validators.required, Validators.minLength(this.reportMinLength)]],
      pdf: ['report.pdf', [Validators.required]]
    });
  }

  ReportUserFn() {
    if (this.fgValidator.invalid) {
      showMessage("Formulario invalido");
    } else {
      let model = this.getReportData();
      this.reportSc.ReportUser(model).subscribe(
        data => {
          showMessage("Usuario reportado");
          this.router.navigate(['/home']);
        },
        error => {
          showMessage("Error en la solicitud");
        }
      );
    }
  }

  getReportData(): ReportModel{
    let model = new ReportModel();
    model.date = new Date().toISOString().substr(0, 10);
    model.text = this.fgv.text.value;
    model.pdf = this.fgv.pdf.value;
    model.publicationId = this.route.snapshot.params["id"];
    model.informerId = this.securitySc.getUserId();
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }


}
