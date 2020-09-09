import { Component, OnInit } from '@angular/core';
import { PublicationModel } from '../../../../models/publication.model';
import { PublicationService } from '../../../../services/publication.service';

declare const showMessage: any;

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {

  recordList: PublicationModel[];
  
  constructor(private service: PublicationService) { }

  ngOnInit(): void {
    this.service.getAllRecords().subscribe(
      data => {
        this.recordList = data;
      },
      error => {
        showMessage(error, 'There was an error with backend communication');
      }
    );
  }
}
