import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPopularComponent } from './sidebar-popular.component';

describe('SidebarPopularComponent', () => {
  let component: SidebarPopularComponent;
  let fixture: ComponentFixture<SidebarPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
