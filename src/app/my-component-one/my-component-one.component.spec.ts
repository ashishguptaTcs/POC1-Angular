import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentOneComponent } from './my-component-one.component';

describe('MyComponentOneComponent', () => {
  let component: MyComponentOneComponent;
  let fixture: ComponentFixture<MyComponentOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponentOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
