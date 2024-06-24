import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appKochamAngulara]' 
})
export class KochamAngularaDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  public ngOnInit() {
    this.renderer.setProperty(this.el.nativeElement, 'innerText', 'Kocham Angulara');
  }
}