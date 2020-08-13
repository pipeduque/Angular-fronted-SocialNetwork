import { Component, OnInit } from '@angular/core';
import { PublicationModel } from '../../../../models/parameters/publication.model';
import { PublicationService } from '../../../../services/parameters/publication.service';
import { ReactionService } from '../../../../services/reaction-service';
import { ReactionModel } from 'src/app/models/reaction.model';
import { SecurityService } from 'src/app/services/security.service';


declare const showMessage: any;

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {

  recordList: PublicationModel[];
  
  constructor(private service: PublicationService, private reactionService: ReactionService, private securityService: SecurityService) { }

  ngOnInit(): void {
    this.service.getAllRecords().subscribe(
      data => {
        this.recordList = data;
        console.log(this.recordList);
      },
      error => {
        showMessage(error, 'There was an error with backend communication');
      }
    );
  }

  like(id) {
    let reaction:ReactionModel=new ReactionModel();
   
    
    reaction.publicationId = id;
    reaction.userId = this.securityService.getUserId();
    console.log(reaction);
    this.reactionService.saveNewRecord(reaction).subscribe(data=>{
      console.log(data);
    });
  }

}
