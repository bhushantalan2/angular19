import { Component } from '@angular/core';
import { Employee, EmployeeService } from '../service/employee-service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
   standalone: true,
  selector: 'app-angular-basic',
  imports: [CommonModule, JsonPipe, FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './angular-basic.html',
  styleUrl: './angular-basic.scss'
})
export class AngularBasic {
  employees: Employee[] = [];
  employee : Employee[] = [];
  loading = true;
  error: string | null = null;
  employeeId: any;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
  }
  showEmployeeDetails(){
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
  searchEmployee(){
    this.employeeService.getEmployeesById(this.employeeId).subscribe({
      next: (res)=>{
        if(res.status === 'success'){
          this.employee = res.data;
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

