import { Component, OnInit, Input } from '@angular/core';
import { PublicationModel } from 'src/app/models/parameters/publication.model';
import { ReactionModel } from 'src/app/models/reaction.model';
import { ReactionService } from '../../../../services/reaction-service';
import { SecurityService } from 'src/app/services/security.service';
import { PublicationService } from 'src/app/services/parameters/publication.service';
@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  @Input() publication: PublicationModel;

  constructor(private publicationService: PublicationService, private securityService: SecurityService, private reactionService: ReactionService) { }

  ngOnInit(): void {
  }

  report(id){
    console.log(id);
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
