import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appRandomBGColor]'
})
export class RandomBGColorDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setBackgroundColor(this.getRandomColor());
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor(this.getRandomColor());
  }

  private setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
