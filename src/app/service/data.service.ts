// import { NgLocaleLocalization } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable,Type} from '@angular/core';

//global http header object
const options={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }



  register(uname:any,email:any,pswd:any){


    const data={
      uname,
      email,
      pswd
    }

    return this.http.post('http://localhost:3000/register',data)
}


login(email:any,pswd:any){

const data={
  email,
  pswd
}

return this.http.post('http://localhost:3000/login',data)


}
}