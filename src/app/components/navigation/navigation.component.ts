import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {


  routeLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
   
    this.routeLinks = [
      {     
        label: 'Vendor Master',
        link: './',
        index: 0
      },
      {     
        label: 'Invoice Master',
        link: './invoicemaster',
        index: 1
      }
      // {     
      //   label: 'Invoice Form',
      //   link: './invoiceform',
      //   index: 1
      // }
    ];
  }
  
  ngOnInit() {
  }

}
