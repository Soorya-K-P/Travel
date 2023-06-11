import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  transform(alldestinations:[],searchKey:String,propName:string): any[] {
    if(!alldestinations||searchKey==""||propName==""){
      return alldestinations;
    }
    const result:any=[]
     alldestinations.forEach((destination:any)=>{
      if(destination[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
        result.push(destination);
      }

    })
    return result;
  }

}
