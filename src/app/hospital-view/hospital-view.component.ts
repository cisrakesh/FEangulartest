import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../hospital.service';
@Component({
  selector: 'app-hospital-view',
  templateUrl: './hospital-view.component.html',
  styleUrls: ['./hospital-view.component.css']
})
export class HospitalViewComponent implements OnInit {
    public hospitals:any[]=[];
  constructor(private hospitalService: HospitalService) {
    this.fetchHospitals();
    
  }

  fetchHospitals(){
    this.hospitals=this.hospitalService.getAllHopitals();
      
  }
  
  ngOnInit() {
  }

}
