import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubScriptionComponent } from './sub-scription.component';

describe('SubScriptionComponent', () => {
  let component: SubScriptionComponent;
  let fixture: ComponentFixture<SubScriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubScriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubScriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
