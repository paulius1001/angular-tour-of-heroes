import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { heroes6Component } from './heroes6.component';

describe('heroes6Component', () => {
  let component: heroes6Component;
  let fixture: ComponentFixture<heroes6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ heroes6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(heroes6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
