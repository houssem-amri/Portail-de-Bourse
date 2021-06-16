import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterOrdresVenteComponent } from './ajouter-ordres-vente.component';

describe('AjouterOrdresVenteComponent', () => {
  let component: AjouterOrdresVenteComponent;
  let fixture: ComponentFixture<AjouterOrdresVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterOrdresVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterOrdresVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
