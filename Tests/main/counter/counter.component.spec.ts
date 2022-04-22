import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';

import { CounterComponent } from '../../../src/app/main/counter/counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  // To Get HTML Objects
  let compiled : HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('should counterOn runs ok', () => {
    component.counterOn(5)
    expect(component.counter).toBe(5);

  });
  
  it('should click buttons ok', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect(component.counter).toBe(1);

  });

  it('should the counter tag h1 change', () => {
     component.counterOn(10);
     // Important !!! When the HTML change use fixture.detectChanges();
     fixture.detectChanges();
     const h1 = compiled.querySelector('h1');
     expect(h1?.textContent).toContain('10');
  });
});
