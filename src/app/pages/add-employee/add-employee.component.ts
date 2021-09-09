import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  CreateForm!: FormGroup;

  constructor(private FBuilder: FormBuilder) {

    this.buildForm();
  }

  private buildForm() {
    this.CreateForm = this.FBuilder.group({
      name: ['', Validators.required],
      RFC: ['', Validators.required],
      edad: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  doSave() {
    console.log(this.CreateForm.controls['name'].value)
    console.log(this.CreateForm?.value)
  }

  ngOnInit(): void {
  }

}
