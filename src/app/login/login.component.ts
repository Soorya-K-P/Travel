import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private ds:DataService,private router:Router) { }

  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  })

  ngOnInit(): void {
    
  }


//   emailid="please enter your email"


email="";
pswd="";


login(){
  
  if(this.loginForm.valid){
    var email=this.loginForm.value.email;
    var pswd=this.loginForm.value.pswd;
  this.ds.login(email,pswd)
  .subscribe((result:any)=>{
    localStorage.setItem('currentUser',JSON.stringify(result.currentUser));
    localStorage.setItem('currentemail',JSON.stringify(result.currentemail));
    alert(result.message);
    this.router.navigateByUrl('all-destinations')
  },
  result=>{
    alert(result.error.message)
  })
}
else{
  alert('Invalid form')
}
}
}