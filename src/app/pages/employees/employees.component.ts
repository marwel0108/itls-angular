import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Array<{id: Number, name: String}> = [
    {id: 1, name: 'Ram'},
    {id: 2, name: 'John'},
    {id: 3, name: 'Franc'},
    {id: 4, name: 'Andrew'}
  ];
  constructor() { }

  selectEmployee(id: Number) {
    console.log(id);
  }

  ngOnInit(): void {
  }

}
