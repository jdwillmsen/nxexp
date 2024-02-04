import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediumCloneUtilComponent } from './medium-clone-util.component';

describe('MediumCloneUtilComponent', () => {
  let component: MediumCloneUtilComponent;
  let fixture: ComponentFixture<MediumCloneUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumCloneUtilComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediumCloneUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
