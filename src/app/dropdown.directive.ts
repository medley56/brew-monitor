import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // @HostBinding('class.show') isOpen = true;
  private dropdownParentEl = this.elementRef.nativeElement;
  private isOpen = false;

  constructor(private elementRef: ElementRef) {
  }


  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.dropdownParentEl.classList.add('show');
      this.dropdownParentEl.querySelector('.dropdown-menu').classList.add('show');

    } else {
      this.dropdownParentEl.classList.remove('show');
      this.dropdownParentEl.querySelector('.dropdown-menu').classList.remove('show');
    }
  }

}
