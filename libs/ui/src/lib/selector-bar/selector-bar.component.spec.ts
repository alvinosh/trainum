import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorBarComponent } from './selector-bar.component';

describe('SelectorBarComponent', () => {
  let component: SelectorBarComponent;
  let fixture: ComponentFixture<SelectorBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectorBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
