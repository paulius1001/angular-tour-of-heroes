import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Heroes3Component } from './heroes3.component';

describe('Heroes3Component', () => {
  let component: Heroes3Component;
  let fixture: ComponentFixture<Heroes3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Heroes3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Heroes3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
