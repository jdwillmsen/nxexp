import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediumCloneDataAccessComponent } from './medium-clone-data-access.component';

describe('MediumCloneDataAccessComponent', () => {
  let component: MediumCloneDataAccessComponent;
  let fixture: ComponentFixture<MediumCloneDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumCloneDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediumCloneDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
