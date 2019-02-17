import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OralExaminationProtocolComponent } from './oral-examination-protocol.component';

describe('OralExaminationProtocolComponent', () => {
  let component: OralExaminationProtocolComponent;
  let fixture: ComponentFixture<OralExaminationProtocolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OralExaminationProtocolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OralExaminationProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
