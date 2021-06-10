import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteEspeceComponent } from './compte-espece.component';

describe('CompteEspeceComponent', () => {
  let component: CompteEspeceComponent;
  let fixture: ComponentFixture<CompteEspeceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteEspeceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteEspeceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
