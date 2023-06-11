import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { ContactService } from 'src/app/contact.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  grand:number=0;
  updatedgrand:number=0;
  constructor(private router:Router, private api:ApiService, private fb:FormBuilder, private routing:Router) { }

  booknowForm = this.fb.group({
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    phone:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10), Validators.pattern('[0-9]*')]],
    destination:['',[Validators.required,Validators.pattern('[a-zA ]*')]],
    totaladults:['',[Validators.required, Validators.pattern('[0-9]*')]],
    children:['',[Validators.required, Validators.pattern('[0-9]*')]],
    days:['',[Validators.required, Validators.pattern('[0-9 a-zA-z]*')]],

  })



  ngOnInit(): void {
  }
  

    bookNow(){
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


}
