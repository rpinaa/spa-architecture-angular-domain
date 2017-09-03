import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperComponent } from './newspaper.component';

describe('NewspaperComponent', () => {
  let component: NewspaperComponent;
  let fixture: ComponentFixture<NewspaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
