import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmpployeeService } from '../empployee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmpployeeService,
    private router:Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }
  public getEmployees() {
      this.employeeService.getEmployeeList().subscribe((data) => {
        this.employees = data as Employee[];
      });
  }

  updateEmployee(id:number) {
    this.router.navigate(['update-employee',id]);
  }
}
