import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { UserService } from './../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',]
})
export class LoginComponent implements OnInit {

  allUsers = [];

  email = "";
  password = "";

  constructor(private http: HttpClient, private User: UserService) {

  }

  ngOnInit(): void {
    this.loginUser();
  }
  loginUser() {
    this.User.loginUser()
      .subscribe(
        res => {
          console.log(res);
          this.allUsers = res;
        },
        err => {
          console.log(err);
        })
  }
}
