import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSimilarComponent } from './blog-similar.component';

describe('BlogSimilarComponent', () => {
  let component: BlogSimilarComponent;
  let fixture: ComponentFixture<BlogSimilarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogSimilarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogSimilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
