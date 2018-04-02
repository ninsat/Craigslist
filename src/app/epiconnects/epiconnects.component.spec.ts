import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpiconnectsComponent } from './epiconnects.component';

describe('EpiconnectsComponent', () => {
  let component: EpiconnectsComponent;
  let fixture: ComponentFixture<EpiconnectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpiconnectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpiconnectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
