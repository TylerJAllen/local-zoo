import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBeastComponent } from './edit-beast.component';

describe('EditBeastComponent', () => {
  let component: EditBeastComponent;
  let fixture: ComponentFixture<EditBeastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBeastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBeastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
