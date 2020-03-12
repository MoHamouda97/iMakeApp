import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { OurWorkComponent } from './../../../common/our-work/our-work.component';
import Typed from 'typed.js';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  @Input() ourWork: OurWorkComponent;

  constructor() { }

  ngOnInit(): void {
    let options = {
      strings: ['Apps.', 'Websites.', 'Softwares.'],
      typeSpeed: 50,
      backDelay: 1000,
      backSpeed: 50,
      loop: true
    };
    
    let typed = new Typed('.typing', options);

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    animateOut: 'fadeOut',
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 6
      }
    },
    nav: true
  }  

}
