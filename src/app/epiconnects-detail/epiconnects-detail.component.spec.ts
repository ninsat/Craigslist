import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpiconnectsDetailComponent } from './epiconnects-detail.component';

describe('EpiconnectsDetailComponent', () => {
  let component: EpiconnectsDetailComponent;
  let fixture: ComponentFixture<EpiconnectsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpiconnectsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpiconnectsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
