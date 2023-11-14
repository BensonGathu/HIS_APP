import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.page.html',
  styleUrls: ['./add-employee.page.scss'],
})
export class AddEmployeePage implements OnInit {
  genders = ['Male', 'Female'];
  employeeId: any;
  employeeFirstName: any;
  employeeLastName: any;
  employeeSurname: any;
  employeeEmail: any;
  employeeTitle: any;
  employeeDateOfBirth: any;
  employeeIdNo: any;
  employeeGender: any;
  employeeNationality: any;
  employeeEthnicity: any;
  employeeHomeCounty: any;
  employeePostalAddress: any;
  employeeCode: any;
  employeeTown: any;
  employeeTelephoneNumber: any;
  employeeMobileNumber: any;
  employeeAlternativeContactPerson: any;
  employeeContactPersonTelephone: any;
  employeeDisability: any;
  employeeDisabilityDetails: any;
  employeeDisabilityRegNumber: any;
  employeeDisabilityRegDate: any;
  employeeObject:any
  constructor(public modalCtrl: ModalController) { }
  selectedGender(index: any) {
    this.employeeGender = this.genders[index];
  }
  ngOnInit() {
  }

  addEmployee() {
    console.log('Adding Emplyee');
    this.employeeObject = {
      firstname: this.employeeFirstName,
      lastname: this.employeeLastName,
      surname: this.employeeSurname,
      email: this.employeeEmail,
      title: this.employeeTitle,
      date_of_birth: this.employeeDateOfBirth,
      id_no: this.employeeIdNo,
      gender: this.employeeGender,
      nationality: this.employeeNationality,
      ethnicity: this.employeeEthnicity,
      home_county: this.employeeHomeCounty,
      postal_address: this.employeePostalAddress,
      code: this.employeeCode,
      town: this.employeeTown,
      telephone_number: this.employeeTelephoneNumber,
      mobile_number: this.employeeMobileNumber,
      alternative_contact_person: this.employeeAlternativeContactPerson,
      contact_person_telephone: this.employeeContactPersonTelephone,
      disability: this.employeeDisability,
      disability_details: this.employeeDisabilityDetails,
      disability_reg_number: this.employeeDisabilityRegNumber,
      disability_reg_date: this.employeeDisabilityRegDate,
      
    };
    this.dismiss();
  }
  async dismiss() {
    await this.modalCtrl.dismiss(this.employeeObject);
  }

}
