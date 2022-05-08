import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedTieContentComponent } from './red-tie-content.component';

describe('RedTieContentComponent', () => {
  let component: RedTieContentComponent;
  let fixture: ComponentFixture<RedTieContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedTieContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedTieContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
