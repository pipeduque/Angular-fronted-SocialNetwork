import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel} from 'src/app/models/login.model';

import { SecurityService} from '../../../services/security.service';
import SHA512 from 'crypto-js/sha512';
import { FormsConfig } from 'src/app/config/forms-config';

declare const showMessage: any;
declare const initSidenav: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]]
    });
  }

  LoginUserFn() {
    if (this.fgValidator.invalid) {
      showMessage("Formulario invalido");
    } else {
      let model = this.getLoginData();
      this.service.LoginUser(model).subscribe(
        data => {
          this.service.saveSeccionData(data);
          showMessage("Inicio de sección correcto");
          this.router.navigate(['/home']);
        },
        error => {
          showMessage("Usuario o contraseña invalida");
        }
      );
    }
  }

  getLoginData(): LoginModel {
    let model = new LoginModel();
    model.email = this.fgv.email.value;
    model.password = SHA512(this.fgv.password.value).toString();
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
