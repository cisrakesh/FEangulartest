import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor() { }
  
  public hospitals: any[] =[
        {hospitalName:'KIMS',contactNumber:'123456'},
        {hospitalName:'PIMS',contactNumber:'123456'},
        ];
        
    public departments: any[] =[
        {name:'test1',value:'123456',hospital:"KIMS"},
        {name:'test2',value:'123456',hospital:"KIMS"},
        {name:'test3',value:'123456',hospital:"PIMS"},
        {name:'test4',value:'123456',hospital:"PIMS"},
        ];
        
    getDepartmentByHospital(hospital){
        var departments:any[]=[];
        for(var i = 0;i<this.departments.length;i++) { 
            if(this.departments[i].hospital==hospital){
               departments.push(this.departments[i]);
               
            }
        } 
        return departments;
    }
    
    getAllHopitals() {
        return this.hospitals;
    }
}
