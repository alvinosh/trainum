import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkoutFormComponent } from './create-workout-form.component';

describe('CreateWorkoutFormComponent', () => {
  let component: CreateWorkoutFormComponent;
  let fixture: ComponentFixture<CreateWorkoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateWorkoutFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateWorkoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
