import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCategoryPopularComponent } from './sidebar-category-popular.component';

describe('SidebarCategoryPopularComponent', () => {
  let component: SidebarCategoryPopularComponent;
  let fixture: ComponentFixture<SidebarCategoryPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarCategoryPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCategoryPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
