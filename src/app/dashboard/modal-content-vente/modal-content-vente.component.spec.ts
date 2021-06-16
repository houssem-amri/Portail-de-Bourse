import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContentVenteComponent } from './modal-content-vente.component';

describe('ModalContentVenteComponent', () => {
  let component: ModalContentVenteComponent;
  let fixture: ComponentFixture<ModalContentVenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalContentVenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContentVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
