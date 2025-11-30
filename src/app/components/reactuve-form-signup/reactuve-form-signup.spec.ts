import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactuveFormSignup } from './reactuve-form-signup';

describe('ReactuveFormSignup', () => {
  let component: ReactuveFormSignup;
  let fixture: ComponentFixture<ReactuveFormSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactuveFormSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactuveFormSignup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
