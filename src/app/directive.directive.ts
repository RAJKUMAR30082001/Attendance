import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter',['$event']) onMouseEnter(event:MouseEvent) {
    console.log(event)
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');
  }

}
