import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.page.html',
  styleUrls: ['./employee-details.page.scss'],
})
export class EmployeeDetailsPage implements OnInit {
  employee: any;
  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService, private router: Router) { }

    ngOnInit() {
      const employeeId = this.route.snapshot.paramMap.get('id');
      if (employeeId) {
        this.loadEmployeeDetails(+employeeId);
       
      }
    }

    loadEmployeeDetails(employeeId: number) {
      this.employeeService.getSingleEmployee(employeeId).subscribe((employee) => {
        this.employee = employee;
      });
    }

    goToHomePage(){
      this.router.navigate(['']);
    }
}
