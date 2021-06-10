import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecaccountComponent } from './secaccount.component';

describe('SecaccountComponent', () => {
  let component: SecaccountComponent;
  let fixture: ComponentFixture<SecaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
