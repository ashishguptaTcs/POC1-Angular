import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSubMenuComponent } from './header-sub-menu.component';

describe('HeaderSubMenuComponent', () => {
  let component: HeaderSubMenuComponent;
  let fixture: ComponentFixture<HeaderSubMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSubMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSubMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
