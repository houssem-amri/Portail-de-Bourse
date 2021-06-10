import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterOrdresComponent } from './ajouter-ordres.component';

describe('AjouterOrdresComponent', () => {
  let component: AjouterOrdresComponent;
  let fixture: ComponentFixture<AjouterOrdresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterOrdresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterOrdresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
