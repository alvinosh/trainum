import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[trainumTxtInput]',
})
export class TextInputDirective {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const css = `
      width: 100%;
      height: 3rem;
    
      padding: 0rem 0.6rem;
      border: 1px solid grey;
      border-radius: 0.25rem;
    
      font-size: 1rem;
      color: grey;
    `;
    this.elementRef.nativeElement.setAttribute('style', css);
  }
}
