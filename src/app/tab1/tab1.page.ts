import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Storage } from '@ionic/storage-angular';
import { ModalController } from '@ionic/angular';
import { EmployeeService } from '../employee.service';
import { AddEmployeePage } from '../add-employee/add-employee.page';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  employeesList: any = [];
  constructor(
    public modalCtrl: ModalController,
    private employeeService: EmployeeService,
    private authService: AuthService,
    private router: Router,
    private storage: Storage
  ) {}

  async ngOnInit(): Promise<void> {
    await this.storage.create();
    this.authService
      .getAuthenticationStatus()
      .subscribe((authenticated) => {
        console.log(authenticated);

        if (!authenticated) {
          this.router.navigate(['/login']);
        }
      })
      .unsubscribe();

    this.employeeService.getEmployees().subscribe(
      (data: any) => {
        console.log('Get API Response:', data);
        this.employeesList = data;
      },
      (error) => {
        console.error('Error getting todos:', error);
      }
    );
  }

  goToDetailsPage(employeeId: number) {
    this.router.navigate(['employee-details', employeeId]);
  }

  async addEmployee() {
    const modal = await this.modalCtrl.create({ component: AddEmployeePage });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.employeeService.postEmployee(result.data).subscribe(
          (response: any) => {
            console.log('Post API Response:', response);
          },
          (error: any) => {
            console.error('Error posting task:', error);
          }
        );
      }
    });
    return await modal.present();
  }

  logOut() {
    this.authService.setAuthenticationStatus(false);
    this.router.navigate(['/login']);
  }
}
