import { Component, OnInit, Input } from '@angular/core';
import { PublicationModel } from 'src/app/models/parameters/publication.model';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  @Input() publication: PublicationModel;

  constructor() { }

  ngOnInit(): void {
  }

  report(id){
    console.log(id);
  }

}
