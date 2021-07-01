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

  constructor(private http: HttpClient, private User: UserService) {}

  ngOnInit(): void {
  }

  public loginUser() {
    const body = {email: this.email, password: this.password};
    this.User.getUsers()
      .subscribe(
        res => {
          console.log(res);
          // const result = res.find( (email) => email === body.email );

        },
        err => {
          console.log(err);
        })
  }
}
