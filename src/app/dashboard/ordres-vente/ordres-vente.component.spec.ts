import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdresVenteComponent } from './ordres-vente.component';

describe('OrdresVenteComponent', () => {
  let component: OrdresVenteComponent;
  let fixture: ComponentFixture<OrdresVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdresVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdresVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
