import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSetFormComponent } from './create-set-form.component';

describe('CreateSetFormComponent', () => {
  let component: CreateSetFormComponent;
  let fixture: ComponentFixture<CreateSetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateSetFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
