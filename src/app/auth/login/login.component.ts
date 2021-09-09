import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  CreateForm!: FormGroup;

  constructor(
    private userService: UserService,
    private FBuilder: FormBuilder,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  doSave() {
    this.userService.login(this.CreateForm.value).subscribe(
      (data: any) => {
        sessionStorage.setItem('email', data.email);
        this.router.navigateByUrl('dashboard');
        console.log("Éxito al logear")
      },
      (error) => { console.log("Error al logear") }
    );
  }

  private buildForm() {
    this.CreateForm = this.FBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

}
