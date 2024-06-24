import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDisableLink]',
})
export class DisableLinkDirective {
  @Input() set appDisableLink(condition: boolean) {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', condition);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

}