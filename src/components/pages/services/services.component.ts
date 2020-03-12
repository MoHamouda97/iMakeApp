import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {

  constructor(private wowService: NgwWowService, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.wowService.init(); 
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }

}
