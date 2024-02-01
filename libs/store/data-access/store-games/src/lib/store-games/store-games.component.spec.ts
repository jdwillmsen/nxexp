import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreGamesComponent } from './store-games.component';

describe('StoreGamesComponent', () => {
  let component: StoreGamesComponent;
  let fixture: ComponentFixture<StoreGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreGamesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
