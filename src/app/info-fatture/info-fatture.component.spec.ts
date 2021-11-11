import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFattureComponent } from './info-fatture.component';

describe('InfoFattureComponent', () => {
  let component: InfoFattureComponent;
  let fixture: ComponentFixture<InfoFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
