import { Component, OnInit } from '@angular/core';
import { BannersService } from 'src/app/shared/services/banners.service';
import { bannersModel } from 'src/app/shared/services/models/banners.model';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  banners: bannersModel[] = [];
  constructor(private bannerServices: BannersService) { }

  ngOnInit(): void {
    this.getBanners();
  }

  getBanners() {
    this.bannerServices.getAll().subscribe(
      (data: any) => {
        this.banners = data;
        console.log(this.banners);
      },
      (error) => {}
    );
  }

}
