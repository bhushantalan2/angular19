import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularBasic } from './angular-basic';

describe('AngularBasic', () => {
  let component: AngularBasic;
  let fixture: ComponentFixture<AngularBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularBasic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularBasic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
