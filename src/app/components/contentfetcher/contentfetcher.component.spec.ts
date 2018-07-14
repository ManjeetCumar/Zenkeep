import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentfetcherComponent } from './contentfetcher.component';

describe('ContentfetcherComponent', () => {
  let component: ContentfetcherComponent;
  let fixture: ComponentFixture<ContentfetcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentfetcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentfetcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
