import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel} from 'src/app/models/login.model';

import { SecurityService} from '../../../services/security.service';
import SHA512 from 'crypto-js/sha512';

declare const showMessage: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  LoginUserFn() {
    if (this.fgValidator.invalid) {
      showMessage("Formulario invalido");
    } else {
      let model = this.getLoginData();
      console.log(model);
      this.service.LoginUser(model).subscribe(
        data => {
          this.service.saveSeccionData(data);
          showMessage("Inicio de sección correcto");
          this.router.navigate(['/home']);
        },
        error => {
          showMessage("Error al iniciar sección");
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
