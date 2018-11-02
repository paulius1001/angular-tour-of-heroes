import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Heroes4Component } from './heroes4.component';

describe('Heroes4Component', () => {
  let component: Heroes4Component;
  let fixture: ComponentFixture<Heroes4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Heroes4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Heroes4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
