import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAuthComponent } from './ajouter-auth.component';

describe('AjouterAuthComponent', () => {
  let component: AjouterAuthComponent;
  let fixture: ComponentFixture<AjouterAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
