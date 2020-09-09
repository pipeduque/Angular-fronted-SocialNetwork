import { Component, OnInit, Input } from '@angular/core';
import { PublicationModel } from 'src/app/models/publication.model';
import { ReactionModel } from 'src/app/models/reaction.model';
import { ReactionService } from '../../../../services/reaction-service';
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  @Input() publication: PublicationModel;

  constructor(
    private securityService: SecurityService, 
    private reactionService: ReactionService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  report(id){
    this.router.navigate([`/reports/report-publication/${id}`])
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
