import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  EmpName: string = ' john';
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
