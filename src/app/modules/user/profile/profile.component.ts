import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/models/user.model';
import { OwnerService} from 'src/app/services/owner.service';
import { RoomModel } from 'src/app/models/parameters/room.model';
import { PublicationModel } from 'src/app/models/parameters/publication.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: UserModel;
  userId: String;
  room: RoomModel[];

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private ownerService: OwnerService
  ) {
    this.getUserId();
  }

  ngOnInit(): void {
    this.getUser();   
  }

  async getUserId(){
    this.userId = await this.route.snapshot.params["id"];
    this.ownerService.getRoomsById(this.userId).subscribe(
      data => {
        this.room = data;
        console.log(this.room);
      },
      error => {
      }
    );
  }
  
  async getUser() {
    this.userService.getRecordById(this.userId).subscribe(
      data => {
        this.user = data;
      },
      err => {

      }
    );
  }

}
