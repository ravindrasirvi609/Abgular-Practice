import { AfterContentInit, Component, OnInit, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit, AfterContentInit{
  @ContentChild( EmployeeComponent) employee? : EmployeeComponent;
  constructor() {}
  ngAfterContentInit(): void {
    if (this.employee) {
      this.employee.EmpName = "ravindra";
    }
  }
  ngOnInit(): void {
    
  }
}


