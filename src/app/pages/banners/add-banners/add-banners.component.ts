import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BannersService } from 'src/app/shared/services/banners.service';
import { bannersModel } from 'src/app/shared/services/models/banners.model';

@Component({
  selector: 'app-add-banners',
  templateUrl: './add-banners.component.html',
  styleUrls: ['./add-banners.component.css']
})
export class AddBannersComponent implements OnInit {

  banners: bannersModel[] = [];
  CreateForm!: FormGroup;

  constructor(
    private FBuilder: FormBuilder,
    private bannersService: BannersService
  ) {

    this.buildForm();
  }

  private buildForm() {
    this.CreateForm = this.FBuilder.group({
      titulo: ['', Validators.required],
      texto: ['', Validators.required],
      portadaUrl: ['', Validators.required],
      maxImpresiones: ['', Validators.required],
      actualImpresiones: ['', Validators.required],
      link: ['', Validators.required],
      prioridad: ['', Validators.required],
      categoria: ['', Validators.required],
    })
  }

  doSave() {
    console.log(this.CreateForm.controls['titulo'].value)
    this.bannersService.add(this.CreateForm.value).subscribe(
      (data: any) => {
        alert("Éxito al registrar");
      },
      (error) => { alert('Error al registrar el banner'); }
    );
  }

  ngOnInit(): void {
  }

}
