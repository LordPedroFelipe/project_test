import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'treasy-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  permissao: Number;

  constructor() { }

  ngOnInit() {
    this.permissao = 1;
  }

}
