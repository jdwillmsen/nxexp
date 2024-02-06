import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Co2DataAccessComponent } from './co2-data-access.component';

describe('Co2DataAccessComponent', () => {
  let component: Co2DataAccessComponent;
  let fixture: ComponentFixture<Co2DataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Co2DataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Co2DataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
