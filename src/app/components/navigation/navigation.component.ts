import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  id: any;
  routeLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    this.activatedRoute.params.subscribe(param => {
      if (param['id']) {
        this.id = param['id'];
      }
    })
   
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
