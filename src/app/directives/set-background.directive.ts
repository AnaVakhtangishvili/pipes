import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSetBackground]'
})
export class SetBackgroundDirective {
  @Input('appSetBackground') color: string = '';

  constructor(private ref: ElementRef) { }

  @HostListener('click')
  changeBackgroung(){
    this.ref.nativeElement.style.background = this.color;
  }
}
