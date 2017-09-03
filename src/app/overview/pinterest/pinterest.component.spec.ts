import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinterestComponent } from './pinterest.component';

describe('PinterestComponent', () => {
  let component: PinterestComponent;
  let fixture: ComponentFixture<PinterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
