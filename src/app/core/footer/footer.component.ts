import { Component, OnInit } from '@angular/core';
// import {  } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

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
      // var subscribed: any = document.querySelector('#subscribe');
      // subscribed.innerHTML = 'Subscription successful';

        Swal.fire('Subscribed', '', 'success' )
  }
}
