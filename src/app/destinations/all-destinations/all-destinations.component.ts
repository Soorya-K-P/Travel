import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-all-destinations',
  templateUrl: './all-destinations.component.html',
  styleUrls: ['./all-destinations.component.css']
})
export class AllDestinationsComponent implements OnInit {

alldestinations:any=[]//array of data
  constructor(private api:ApiService) { }

  searchTerm:string='';

  ngOnInit(): void {
    this.api.getalldestinations().subscribe(
      (data:any)=>{
        this.alldestinations = data.destinations;
      }
    )
    this.api.searchkey.subscribe(
      (data:any)=>{
        this.searchTerm=data

      }
    )
  }

  // addtofavourite(destination:any){
  //   this.api.addtofavourite(destination).subscribe(
  //     (result:any)=>{
  //       // (server to client)
  //       alert(result.message)//add successfully
  //     },
  //     (result:any)=>{
  //       alert(result.error.message)//error
  //     }
  //   )
  // }


}
