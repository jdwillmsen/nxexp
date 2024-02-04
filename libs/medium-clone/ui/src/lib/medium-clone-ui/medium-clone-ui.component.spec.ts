import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediumCloneUiComponent } from './medium-clone-ui.component';

describe('MediumCloneUiComponent', () => {
  let component: MediumCloneUiComponent;
  let fixture: ComponentFixture<MediumCloneUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumCloneUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediumCloneUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
