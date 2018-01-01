import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgmCoreModule } from '@agm/core';
import { LugaresComponent } from './lugares.component';
import { LugaresService } from '../services/lugares.service';

describe('LugaresComponent', () => {
  let fixture;
  let lugaresServices: LugaresService;
  let app;
  let lugares: any=null;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [LugaresComponent],
      imports: [
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyD_WGF3n-7hURPte4-4LXr7uSEHZJXXAKg'
        })
      ]
    })
    fixture = TestBed.createComponent(LugaresComponent);
    app = fixture.debugElement.componentInstance;
    lugaresServices = fixture.debugElement.injector.get(LugaresService);
  })
  it('detalles', ()=>{
    lugaresServices.getLugares()
    .subscribe(lugares => {
      if(lugares.status == 200){
        let obj = lugares.json();
        this.lugares= Object.keys(obj).map( (key) => { return obj[key]; });
      }
    });
    expect(app.lugares).toEqual(this.lugares);
  })
});
