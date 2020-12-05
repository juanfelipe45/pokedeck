import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor( private _router: Router ) { }

  ngOnInit(): void {
  }

  /****************** Funciones propias ********************/

  home(): void {
    this._router.navigate(['/pokemon']);
  }

}