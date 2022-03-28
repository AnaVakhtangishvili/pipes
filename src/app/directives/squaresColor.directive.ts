import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSquaresColor]'
})
export class SquaresColorDirective {

  @Input('appSquaresColor') color: string = '';

  constructor(private ref: ElementRef) { }

  @HostListener('mouseenter')
  changeBackgroung(){
    this.ref.nativeElement.style.background = this.color;
  }
}
