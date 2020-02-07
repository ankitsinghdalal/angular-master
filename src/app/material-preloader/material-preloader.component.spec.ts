import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialPreloaderComponent } from './material-preloader.component';

describe('MaterialPreloaderComponent', () => {
  let component: MaterialPreloaderComponent;
  let fixture: ComponentFixture<MaterialPreloaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialPreloaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
