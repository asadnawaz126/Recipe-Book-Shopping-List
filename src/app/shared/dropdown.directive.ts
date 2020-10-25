import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
  })
export class DropdownDirective implements OnInit{

  // this was my method of implementation
  private clickCount: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.clickCount = 0;
  }

  @HostListener('click') mouseClickOpen() {
    this.clickCount++;
    if (this.clickCount % 2 !== 0) {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }
  }

  // course method was simpler and this is it

  // @HostBinding('class.open') isOpen = false;
  //
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
}
