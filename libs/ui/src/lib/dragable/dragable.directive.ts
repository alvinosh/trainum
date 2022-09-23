import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[trainumDragable]',
})
export class DragableDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.EventEmitter;
  }

  @Input() draggable = false;
  @Output() draggedAway: EventEmitter<boolean> = new EventEmitter<boolean>();
  dragging = false;
  dragStart: [number, number] = [0, 0];

  @HostBinding('style.cursor')
  cursor = this.draggable ? 'grabbing' : 'pointer';

  @HostListener('document:mouseup', ['$event'])
  @HostListener('document:touchend', ['$event'])
  onMouseUp() {
    if (this.elementRef && this.dragging) {
      this.elementRef.nativeElement.style.left = '0px';
    }
    this.dragging = false;
  }

  @HostListener('document:touchmove', ['$event'])
  @HostListener('document:mousemove', ['$event'])
  onTouchMove($event: any) {
    if (this.elementRef && this.dragging) {
      let deltaX = 0;

      if ($event.clientX) {
        deltaX = $event.clientX - this.dragStart[0];
      } else {
        deltaX = $event.touches[0].clientX - this.dragStart[0];
      }

      this.elementRef.nativeElement.style.left = deltaX.toString() + 'px';

      if (
        deltaX >
        this.elementRef.nativeElement.getBoundingClientRect().width * 0.7
      ) {
        this.draggedAway.emit(true);
      }
    }
  }

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  dragDown($event: any) {
    if ($event.clientX) {
      this.dragStart = [$event.clientX, $event.clientY];
    } else {
      this.dragStart = [$event.touches[0].clientX, $event.touches[0].clientY];
    }
    this.dragging = true;
  }
}
