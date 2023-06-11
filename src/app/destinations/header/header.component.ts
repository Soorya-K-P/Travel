import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router, private api:ApiService) { }

  favcount:number=0;

  ngOnInit(): void {
  }

  search(event:any){
    let searchKey=event.target.value
    this.api.searchkey.next(searchKey)
  }
  

  logout(){
    // alert('clicked')
    localStorage.removeItem('currentemail');
    localStorage.removeItem('currentUser');

    this.router.navigateByUrl('login');
  }

}
