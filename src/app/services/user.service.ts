import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { ApiHandlerService } from './api-handler.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getUserURL = env.API_URL.UserService.User;
  


  constructor(private readonly apiService: ApiHandlerService) { }

  loginUser() {
    console.log(this.getUserURL);
    return this.apiService.get(`${this.getUserURL}`);
  }
}
