import { Component } from '@angular/core';
import { Employee, EmployeeService } from '../service/employee-service';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-angular-basic',
  imports: [CommonModule, JsonPipe],
  templateUrl: './angular-basic.html',
  styleUrl: './angular-basic.scss'
})
export class AngularBasic {
    employees: Employee[] = [];
  loading = true;
  error: string | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe({
      next: (res) => {
        if (res.status === 'success') {
          this.employees = res.data;
          console.log(this.employees);
        } else {
          this.error = 'Failed to load employees.';
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error fetching data.';
        this.loading = false;
      }
    });
  }
}

