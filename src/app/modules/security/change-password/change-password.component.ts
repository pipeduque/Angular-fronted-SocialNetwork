import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { ChangePasswordModel } from '../../../models/change-password.model';
import SHA512 from 'crypto-js/sha512';
import { FormsConfig } from 'src/app/config/forms-config';

declare const showMessage: any;

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  fgValidator: FormGroup;
  passwordMinLength = FormsConfig.PASSWORD_MIN_LENGTH;

  constructor(
    private fb: FormBuilder,
    private service: SecurityService,
    private router: Router) { }

  ngOnInit(): void {
    this.formBuilding();
  }

  formBuilding() {
    this.fgValidator = this.fb.group({
      userPassword: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]],
      newPassword: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]],
      newPassword2: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]]
    });
  }

  ChangePasswordFn() {
    if (this.fgValidator.invalid || this.fgv.newPassword.value != this.fgv.newPassword2.value) {
      showMessage("Formulario invalido");
    } else {
      let model = this.getPasswordData();
      this.service.ChangePassword(model).subscribe(
        data => {
          showMessage("Contraseña cambiada");
          this.router.navigate(['/home']);
        },
        error => {
          showMessage("Error en la solicitud");
        }
      );
    }
  }

  getPasswordData(): ChangePasswordModel {
    let model = new ChangePasswordModel();
    model.id = this.service.getUserId();
    model.userPassword = SHA512(this.fgv.userPassword.value).toString();
    model.newPassword = SHA512(this.fgv.newPassword.value).toString();
    model.newPassword2 = SHA512(this.fgv.newPassword2.value).toString();
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}

