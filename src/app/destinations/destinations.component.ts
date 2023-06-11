import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }
// search(event:any){
//   let searchKey=event.target.value
//   this.api.searchkey.next(searchKey)
// }
}
