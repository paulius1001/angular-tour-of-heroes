import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { heroes5Component } from './heroes5.component';

describe('heroes5Component', () => {
  let component: heroes5Component;
  let fixture: ComponentFixture<heroes5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ heroes5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(heroes5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
