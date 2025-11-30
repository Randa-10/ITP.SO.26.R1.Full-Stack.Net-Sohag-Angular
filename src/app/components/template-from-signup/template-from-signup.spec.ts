import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFromSignup } from './template-from-signup';

describe('TemplateFromSignup', () => {
  let component: TemplateFromSignup;
  let fixture: ComponentFixture<TemplateFromSignup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFromSignup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFromSignup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
