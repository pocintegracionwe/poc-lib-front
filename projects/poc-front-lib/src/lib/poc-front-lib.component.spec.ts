import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocFrontLibComponent } from './poc-front-lib.component';

describe('PocFrontLibComponent', () => {
  let component: PocFrontLibComponent;
  let fixture: ComponentFixture<PocFrontLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocFrontLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocFrontLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
