import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHoverComponent } from './sidebar-hover.component';

describe('SidebarHoverComponent', () => {
  let component: SidebarHoverComponent;
  let fixture: ComponentFixture<SidebarHoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarHoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
