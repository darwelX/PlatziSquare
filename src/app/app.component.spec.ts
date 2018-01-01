import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { environment } from '../environments/environment';
import { RouterTestingModule } from '@angular/router/testing';

const appRoutes: Routes = environment.rutas;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [ RouterTestingModule.withRoutes([])]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('PlatziSquare');
  }));
});
