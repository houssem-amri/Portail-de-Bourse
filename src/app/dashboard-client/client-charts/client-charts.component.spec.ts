import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientChartsComponent } from './client-charts.component';

describe('ClientChartsComponent', () => {
  let component: ClientChartsComponent;
  let fixture: ComponentFixture<ClientChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
