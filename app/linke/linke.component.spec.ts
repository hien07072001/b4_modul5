import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkeComponent } from './linke.component';

describe('LinkeComponent', () => {
  let component: LinkeComponent;
  let fixture: ComponentFixture<LinkeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
