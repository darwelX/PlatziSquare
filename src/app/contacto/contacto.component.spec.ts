import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ContactoComponent } from './contacto.component';


describe('ContactoComponent', () => {
  let fixture;
  let el;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [ContactoComponent]
    });
    fixture = TestBed.createComponent(ContactoComponent);
    el = fixture.debugElement.nativeElement;
  });
  it('esperando la creación del componente', ()=>{
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

  it('titulo del formulario', () => {
    fixture.detectChanges();
    expect(el.querySelector('.panel-title').textContent).toContain("Escribenos");
  });

  it('boton enviar', ()=>{
    fixture.detectChanges();
    expect(el.querySelector('.btn-success').textContent).toContain('Enviar');
  })

  it('boton cancelar', ()=>{
    fixture.detectChanges();
    expect(el.querySelector('.btn-default').textContent).toContain('Cancelar');
  })

  it('labels', ()=>{
    fixture.detectChanges();
    let labels = el.querySelectorAll('label');
    expect(labels[0].textContent).toContain('Nombre');
  })
});
