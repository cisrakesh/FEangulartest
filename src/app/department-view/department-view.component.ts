import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-view',
  templateUrl: './department-view.component.html',
  styleUrls: ['./department-view.component.css']
})
export class DepartmentViewComponent implements OnInit {

  public departmentList:any[]=[];
  public hospitalName:string='';
  
  constructor(private hospitalService: HospitalService,private activatedRoute: ActivatedRoute) {
    let params: any = this.activatedRoute.snapshot.params;
    this.hospitalName = params.id;
    this.fetchHospitals();
    
  }

  fetchHospitals(){
      this.departmentList=this.hospitalService.getDepartmentByHospital(this.hospitalName);
      
  }

  ngOnInit() {
  }

}
