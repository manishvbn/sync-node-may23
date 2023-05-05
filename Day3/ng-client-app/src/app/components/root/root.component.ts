import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html'
})
export class RootComponent implements OnInit {
  employees?: Array<Employee>;
  getSub?: Subscription;
  message: string;

  constructor(private employeesService: EmployeesService) {
    this.message = "Loading Data, please wait...";
  }

  ngOnInit(): void {
    this.getSub = this.employeesService.getAllEmployees().subscribe({
      next: (resData) => {
        this.employees = [...resData.data];
        this.message = "";
      }, error: (err: string) => {
        this.message = err;
      }
    });
  }
}
