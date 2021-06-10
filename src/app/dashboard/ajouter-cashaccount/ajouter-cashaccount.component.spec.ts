import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterCashaccountComponent } from './ajouter-cashaccount.component';

describe('AjouterCashaccountComponent', () => {
  let component: AjouterCashaccountComponent;
  let fixture: ComponentFixture<AjouterCashaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterCashaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterCashaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
