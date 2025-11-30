import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

// class decorator   ==>meta
@Directive({
  selector: '[appCardStyle]', //html
})
export class CardStyle implements OnInit, OnChanges {
  //imprts  ts
  //style cards

  //property decorators
  @Input() color1: string = 'blue';
  constructor(public elem: ElementRef) {
    //step1
    //document.getElementById()
    // this.elem.nativeElement.style.border = `2px solid ${this.color1}`;
    console.log('constructor');
  }
  ngOnInit(): void {
    //2
    console.log('ngOnInit');

    //  this.elem.nativeElement.style.border = `2px solid ${this.color1}`;
  }
  ngOnChanges(): void {
    //1
    console.log('ngOnChanges');

    this.elem.nativeElement.style.border = `2px solid ${this.color1}`;
  }

  //  @HostListener('eventname')
  //method decorator
  @HostListener('mouseover') mouseOver() {
    this.elem.nativeElement.style.border = `2px solid red`;
  }
  @HostListener('mouseout') mouseOut() {
    this.elem.nativeElement.style.border = `2px solid ${this.color1}`;
  }
}
