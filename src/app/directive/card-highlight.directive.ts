import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCardHighlight]'
})
export class CardHighlightDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.padding = "15px"
    this.el.nativeElement.style.border = "1px solid #a8b7a8"
    this.el.nativeElement.style.borderRadius = "13px"
  }

}
