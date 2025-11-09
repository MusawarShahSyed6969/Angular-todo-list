import { Directive, input, effect, inject, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightCompleteTodo]'
})
export class HighlightCompleteTodo {
  // Input signal that tells if the todo is completed
  isCompleted = input(false);

  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  // Effect: runs whenever isCompleted() changes
  stylesEffect = effect(() => {
    const completed = this.isCompleted();

    if (completed) {
      this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'line-through');
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0.6');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'text-decoration');
      this.renderer.removeStyle(this.el.nativeElement, 'opacity');
    }
  });
}
