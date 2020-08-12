import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { switchMap } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: UserModel;
  userId: String;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.getUserId();
  }

  ngOnInit(): void {
    this.getUser();   
  }

  async getUserId(){
    this.userId = await this.route.snapshot.params["id"];
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
