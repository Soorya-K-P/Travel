import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email="";
  pswd="";
  uname="";

  constructor(private fb:FormBuilder, private ds:DataService,private router:Router) { }

// //registration model
registerForm = this.fb.group({
  email:['',[Validators.required,Validators.email]],
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})


//   ngOnInit(): void {
//   }

register(){
    
  console.log(this.registerForm.get('uname')?.errors);
  
  // alert('register clicked')
  var uname=this.registerForm.value.uname;
  var email=this.registerForm.value.email;
  var pswd=this.registerForm.value.pswd;
  if(this.registerForm.valid){


  // console.log(this.registerForm.get('uname')?.errors);
    this.ds.register(uname,email,pswd)
    .subscribe((result:any)=>{
      alert(result.message);
      this.router.navigateByUrl('login')
    })
  }
  else{
    alert('Invalid form')
  }
}
}