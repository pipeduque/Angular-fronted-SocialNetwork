import { Component, OnInit } from '@angular/core';
import { RoomModel } from '../../../../models/parameters/room.model';
import { RoomService } from '../../../../services/parameters/room.service';

declare const showMessage: any;

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  recordList: RoomModel[];

  constructor( private service: RoomService) { }

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

}

