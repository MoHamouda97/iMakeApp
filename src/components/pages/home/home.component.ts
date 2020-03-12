import { AboutComponent } from './about/about.component';
import { Component, OnInit, Input, OnDestroy, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {

  @Input() about: AboutComponent;

  constructor(private wowService: NgwWowService, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.wowService.init(); 
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: true,
    animateOut: 'fadeOut',
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    items: 1,
    nav: true
  }  

}
