import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageCreateComponent } from './coverage-create.component';

describe('CoverageCreateComponent', () => {
  let component: CoverageCreateComponent;
  let fixture: ComponentFixture<CoverageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
