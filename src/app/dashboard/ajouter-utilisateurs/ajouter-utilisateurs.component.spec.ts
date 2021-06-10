import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUtilisateursComponent } from './ajouter-utilisateurs.component';

describe('AjouterUtilisateursComponent', () => {
  let component: AjouterUtilisateursComponent;
  let fixture: ComponentFixture<AjouterUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
