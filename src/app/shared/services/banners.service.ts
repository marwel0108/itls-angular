import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {environment as environment} from '../../../environments/environment';
import { bannersModel } from './models/banners.model';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  url: string = environment.SERVICES_URL + 'banners/';

  constructor(public http: HttpClient) { }

  getAll(){
    let request;

    let httpHeaders = new HttpHeaders();
    const options = {
      headers: httpHeaders
    };

    return request = this.http.get(this.url + 'showAll', options);
  }

  add( form: bannersModel[] ) {

    let request;
    let httpHeaders = new HttpHeaders();
    const options = {
      headers: httpHeaders
    };
    return request = this.http.post(this.url + 'store', form, options);
  }
}
