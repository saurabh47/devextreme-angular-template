import { Component } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {

  selectedTabIdx = 0;

  tooManyTabs = Array(30).fill({ name: 'Tab'});

  smallNumberOftabs = Array(2).fill({name : 'Tab'});

  constructor() {
  }

  onTabChange() {
    console.log('Tab Changed');
  }
}
