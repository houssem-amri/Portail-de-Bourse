import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteTitreComponent } from './compte-titre.component';

describe('CompteTitreComponent', () => {
  let component: CompteTitreComponent;
  let fixture: ComponentFixture<CompteTitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteTitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
