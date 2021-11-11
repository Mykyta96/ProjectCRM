import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatureComponent } from './fature.component';

describe('FatureComponent', () => {
  let component: FatureComponent;
  let fixture: ComponentFixture<FatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
