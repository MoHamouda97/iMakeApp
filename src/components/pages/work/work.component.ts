import { Component, OnInit, OnDestroy, ElementRef  } from '@angular/core';


@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit, OnDestroy {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.remove();
  }

}
