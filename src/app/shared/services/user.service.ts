import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: string;
  hasSession: boolean = false;
  inLogin: boolean = true;
  url = environment.LOGIN_URL + 'shelterAdministrators/';

  constructor(private http: HttpClient) { }

  /**
   * isLogedIn
   */
  public isLogedIn(): boolean {
    const _mail = sessionStorage.getItem('email');
    if (!!_mail) {
      this.user = _mail;
      this.hasSession = true;
      this.inLogin = false;
    }
    return this.hasSession;
  }

  /**
   * add
   */
  public login(form: any) {
    let request;
    let httpHeaders = new HttpHeaders();
    const options = {
      headers: httpHeaders
    };
    return request = this.http.post(this.url + 'login', form, options);
  }
}
