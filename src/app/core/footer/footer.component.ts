import { Component, OnInit } from '@angular/core';
import {  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', ]
})
export class FooterComponent implements OnInit {
  showAlert(){
    var chuks= document.getElementById('chuksy')!.style.display="block";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
