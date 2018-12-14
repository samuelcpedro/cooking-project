import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]' // atribute selector
})
export class DropdownDirective {

  // Using @HostBinding and @HostListener in Custom Angular Directives
  // https://alligator.io/angular/hostbinding-hostlistener/

  // @HostBinding lets you set properties on the element or component that hosts the directive
  @HostBinding('class.open') isOpen = false;

  // @HostListener lets you listen for events on the host element or component
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

}
