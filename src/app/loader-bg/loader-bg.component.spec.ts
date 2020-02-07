import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderBgComponent } from './loader-bg.component';

describe('LoaderBgComponent', () => {
  let component: LoaderBgComponent;
  let fixture: ComponentFixture<LoaderBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
