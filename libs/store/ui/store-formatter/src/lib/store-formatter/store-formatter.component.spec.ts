import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreFormatterComponent } from './store-formatter.component';

describe('StoreFormatterComponent', () => {
  let component: StoreFormatterComponent;
  let fixture: ComponentFixture<StoreFormatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreFormatterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreFormatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
