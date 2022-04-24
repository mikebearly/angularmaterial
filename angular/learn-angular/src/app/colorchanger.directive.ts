import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorchanger]'
})
export class ColorchangerDirective implements OnInit {
  //These are decorators
  @Input() bgColor: string;
  @Input() txtColor: string;
  @HostListener('mouseenter') onMouseEnter(){
    this.elementRef.nativeElement.style.color = this.txtColor;
    this.elementRef.nativeElement.style.backgroundColor = this.bgColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.color = null;
    this.elementRef.nativeElement.style.backgroundColor = null;
  }
  constructor(private elementRef:ElementRef) {

    console.log("this is directive");
  }
  ngOnInit() {
    //this.elementRef.nativeElement.style.color = this.txtColor;
    //this.elementRef.nativeElement.style.backgroundColor = this.bgColor;
  }
}
