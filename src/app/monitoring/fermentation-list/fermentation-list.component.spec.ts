import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FermentationListComponent } from './fermentation-list.component';

describe('FermentationListComponent', () => {
  let component: FermentationListComponent;
  let fixture: ComponentFixture<FermentationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FermentationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FermentationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
