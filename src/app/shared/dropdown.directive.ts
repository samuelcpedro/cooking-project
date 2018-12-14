import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appIsDropdownOpen]' // atribute selector
})
export class DropdownDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @Input() set appIsDropdownOpen(isOpen: boolean) {
    isOpen
      ? this.renderer.removeClass(this.elRef.nativeElement, 'open')
      : this.renderer.addClass(this.elRef.nativeElement, 'open');
  }
}
