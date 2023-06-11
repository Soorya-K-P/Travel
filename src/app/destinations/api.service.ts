import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  addtofavourite(destination: any) {
    throw new Error('Method not implemented.');
  }
  login(email: string | null | undefined, pswd: string | null | undefined) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

  getalldestinations(){
   return this.http.get('http://localhost:3000/all-destinations')
  }

  searchkey=new BehaviorSubject('')

  getView(id:any){
  
    const data={
      
      id
    }
  
    return this.http.post('http://localhost:3000/getview',data)
  
  }

  bookNow(name:any, phone:any, destination:any, totaladults:any, children:any){
    const data={
      name, phone, destination, totaladults, children
    }

    return this.http.post('http://localhost:3000/bookNow',data)

  }

}

