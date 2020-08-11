import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { ResetPasswordModel } from '../../../models/reset-password.model';

declare const showMessage: any;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: SecurityService,
    private router: Router) { }

  ngOnInit(): void {
    this.formBuilding();
  }

  formBuilding() {
    this.fgValidator = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      type: ['', [Validators.required]]
    });
  }

  ResetPasswordFn() {
    if (this.fgValidator.invalid) {
      showMessage("Formulario invalido");
    } else {
      let model = this.getPasswordData();
      this.service.ResetPassword(model).subscribe(
        data => {
          showMessage("Solicitud enviada");
          this.router.navigate(['/home']);
        },
        error => {
          showMessage("Error en la solicitud");
        }
      );
    }
  }

  getPasswordData(): ResetPasswordModel {
    let model = new ResetPasswordModel();
    model.email = this.fgv.email.value;
    model.type = parseInt(this.fgv.type.value);
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
