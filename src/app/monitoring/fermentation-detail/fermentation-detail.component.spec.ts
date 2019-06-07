import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FermentationDetailComponent } from './fermentation-detail.component';

describe('FermentationDetailComponent', () => {
  let component: FermentationDetailComponent;
  let fixture: ComponentFixture<FermentationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FermentationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FermentationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
