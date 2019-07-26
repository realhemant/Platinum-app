import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(public data : DataService) { }

  ngOnInit() {
    // this.data.getEmployee().subscribe(res=>{
    //   console.log(res)
    // })
  }

}
