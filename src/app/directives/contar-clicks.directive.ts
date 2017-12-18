import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  // una directiva de atributo para enlaces
  selector: 'li[contar-clicks]'
})
export class ContarClicksDirective {
  clickN = 0;

  constructor() { }
  // sirve para modificar el dom desde el typescript y se combina muy bien 
  // con el HosListener es como obtener
  @HostBinding('style.opacity')  opacity: number = .1;

  // @HostListener(evento,[elemento que dispara el evento]) evento()
  @HostListener('click', ['$event.target']) onClick(btn){
    console.log('a', btn, 'Número de clicks', this.clickN++);
    this.opacity += .1;
  }


}
