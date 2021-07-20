import { Component, OnInit } from '@angular/core';
import {  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css', ]
})
export class FooterComponent implements OnInit {
  
 

  constructor() { }

  ngOnInit(): void {
  }

  showAlert(){
    // var subscribe = document.querySelector('#chuksy');
    // subscribe?.addEventListener('click', function(){
    //   subscribe?.style.display ( "Subscription succesful");
    // })
        var newsLetter = document.getElementById('subscribe')!.style.display="block";

  }
}
