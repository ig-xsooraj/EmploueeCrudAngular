import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmpployeeService } from '../empployee.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { error } from 'console';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
})
export class UpdateEmployeeComponent implements OnInit {
  id: number = 0;
  employee: Employee = new Employee();
  constructor(
    private employeeservice: EmpployeeService,
    private aRouter: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.aRouter.snapshot.params['id'];
    this.employeeservice.getEmployeeById(this.id).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => console.log(error)
    );
  }
  onSubmit() {
    this.employeeservice.updateEmployee(this.id, this.employee).subscribe(
      (data) => {
        this.goToEmployeeList();
      },
      (error) => console.log(error)
    );
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
