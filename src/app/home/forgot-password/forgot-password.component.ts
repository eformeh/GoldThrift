import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css',],
})
export class ForgotPasswordComponent implements OnInit {
  showAlert(){
    var chuks= document.getElementById('chuksy')!.style.display="block";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
