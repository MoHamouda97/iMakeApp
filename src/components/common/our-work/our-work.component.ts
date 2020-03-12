import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import mixitup from 'mixitup';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.css']
})
export class OurWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let mixer = mixitup('.works', {
      animation: {
        enable: false
      }
    });

  }

  changeClass (event) {
    $(event.target).addClass('active').siblings().removeClass('active');
  }

}
