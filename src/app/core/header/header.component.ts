import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './unsemantic-grid-responsive-tablet.css']
})
export class HeaderComponent implements OnInit {

 faSearch = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

}
