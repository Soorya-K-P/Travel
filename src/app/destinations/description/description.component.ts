import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  id:any;
  url='';
  grand:number=0;
  updatedgrand:number=0;


  destination:any = [];

  constructor(private fb:FormBuilder, private api:ApiService,private routing:Router, private rout:ActivatedRoute) { }

  booknowForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    phone:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10), Validators.pattern('[0-9]*')]],
    destination:['',[Validators.required,Validators.pattern('[a-zA ]*')]],
    totaladults:['',[Validators.required, Validators.pattern('[0-9]*')]],
    children:['',[Validators.required, Validators.pattern('[0-9]*')]],
    days:['',[Validators.required, Validators.pattern('[0-9 a-zA-z]*')]],

  })

  ngOnInit(): void {
    this.id = this.rout.snapshot.params['id']

    
    if (this.id == 'id') {
      this.url = 'http://localhost:3000/getview'
    }
    this.getView(this.id)
  }

  getView(id: any) {
    const result = this.api.getView(id)
      .subscribe((result: any) => {
        this.destination = result.destinations;
        console.log(this.destination);
        
      },
        (result: any) => {
          alert(result.error.message);

      })
  }

  bookNow(destinationName:any){
      if( this.booknowForm.valid ) {
        // let placeName = destinationName
        let  name = this.booknowForm.value.name
        let  phone = this.booknowForm.value.phone
        let  destination = this.booknowForm.value.destination
        let  totaladults = this.booknowForm.value.totaladults
        let  children = this.booknowForm.value.children

        this.api.bookNow(name, phone, destination, totaladults, children).subscribe((result) => {
          alert('booking successfful')
          this.routing.navigateByUrl('destinations')
          
        })
          
      }
  }

  // discounts

  discount5per(){
    let discount=(this.grand*5)/100
    this.updatedgrand=this.grand-discount
  }
  discount10per(){
    let discount=(this.grand*10)/100
    this.updatedgrand=this.grand-discount
  }
  discount50per(){
    let discount=(this.grand*50)/100
    this.updatedgrand=this.grand-discount
  }


}

