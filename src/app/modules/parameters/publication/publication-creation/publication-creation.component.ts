import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PublicationService } from 'src/app/services/publication.service';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
import { PublicationModel } from 'src/app/models/publication.model';

declare const showMessage: any;

@Component({
  selector: 'app-publication-creation',
  templateUrl: './publication-creation.component.html',
  styleUrls: ['./publication-creation.component.css']
})
export class PublicationCreationComponent implements OnInit {

  fgValidator: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: PublicationService,
    private securitySc: SecurityService,
    private router: Router) { }

  ngOnInit(): void {
    this.formBuilding();
  }

  formBuilding() {
    this.fgValidator = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      pathImage: ['', [Validators.required]]
    });
  }

  saveNewPublicationFn() {
    if (this.fgValidator.invalid) {
      showMessage("Formulario invalido");
    } else {
      const formData = new FormData();
      formData.append('file', this.fgv.pathImage.value);
      console.log(formData)
      this.service.uploadPublicationImage(formData).subscribe(
        datos => {
          let model = this.getPublicationData(datos.filename);
          this.fgv.pathImage.setValue(datos.filename);
          this.service.saveNewRecord(model).subscribe(
            data => {
              showMessage("Creación correcta");
              this.router.navigate(['/home']);
            },
            error => {
              showMessage("Error al crear");
            }
          );
        },
        err => {
          showMessage("No se cargo la imagen");
        }
      );
    }
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file)
      this.fgv.pathImage.setValue(file);
    }
  }

  getPublicationData(image): PublicationModel {
    let model = new PublicationModel();
    model.content = this.fgv.description.value;
    model.pathImage = image;
    model.title = this.fgv.title.value;
    model.date = new Date().toISOString().substr(0, 10);
    model.userId = this.securitySc.getUserId();
    return model;
  }

  get fgv() {
    return this.fgValidator.controls;
  }

}
