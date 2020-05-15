import {
  Directive,
  OnInit,
  Attribute,
  Renderer2,
  ElementRef,
  Input
} from '@angular/core';

@Directive({
  selector: 'img[appImageLoader]'
})
export class ImageLoaderDirective implements OnInit {
  @Input() public imgSrc: string;

  constructor(
    @Attribute('loaderSrc') public loaderSrc: string,
    @Attribute('errorSrc') public errorSrc: string,
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit() {
    this.loadImage();
  }

  private loadImage() {
    if (this.imgSrc && this.imgSrc !== '') {
      const image = new Image();
      image.onload = () => {
        this.renderer.setAttribute(this.el.nativeElement, 'src', this.imgSrc);
      };
      image.onerror = () => {
        this.renderer.setAttribute(this.el.nativeElement, 'src', this.errorSrc);
      };
      image.src = this.imgSrc;

      this.renderer.setAttribute(this.el.nativeElement, 'src', this.loaderSrc);
    }
  }

}
