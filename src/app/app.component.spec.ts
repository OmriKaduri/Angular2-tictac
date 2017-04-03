import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {SquareComponent} from './Square/square.component';
import {SquareRowComponent} from './Board/square-row.component';
import {BoardComponent} from './Board/board.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BoardComponent,
        SquareRowComponent,
        SquareComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have square tag with 'X' property`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('square')).toBeDefined();
  // }));

  // it(`should render player 'X' in a button tag`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('button').textContent).toContain('X');
  // }));
});
