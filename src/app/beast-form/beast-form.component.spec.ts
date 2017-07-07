import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeastFormComponent } from './beast-form.component';

describe('BeastFormComponent', () => {
  let component: BeastFormComponent;
  let fixture: ComponentFixture<BeastFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeastFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeastFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
