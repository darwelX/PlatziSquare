import { Renderer2, Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[resaltar]'
})
export class ResaltarDirective implements OnInit{
  //ElementRef crea una referencia en html que puede ser manipulada en typeScript
  //Renderer2 permite manipular el html a nivel de css, esta clase traduce a las distintas plataformas que puede correr angular
  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }
  // se declara el atributo plan el cual es un atributo de entrada de la directiva
  @Input('resaltar') plan : string = ''
  ngOnInit(){
     if(this.plan === 'pagado'){
        //this.renderer.setStyle(elementoNativo, propiedad, valor)
        this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
        this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
        // this.renderer.setStyle(this.elRef.nativeElement, 'opacity', '0');
        // this.renderer.setStyle(this.elRef.nativeElement, 'animation-name', 'parpadeo');
        // this.renderer.setStyle(this.elRef.nativeElement, 'animation-duration', '3s');
        // this.renderer.setStyle(this.elRef.nativeElement, 'animation-iteration-count', '2');
        // this.renderer.setStyle(this.elRef.nativeElement, 'animation-fill-mode', 'forwards');
     }
  }
}
