import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTitreComponent } from './ajouter-titre.component';

describe('AjouterTitreComponent', () => {
  let component: AjouterTitreComponent;
  let fixture: ComponentFixture<AjouterTitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterTitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
