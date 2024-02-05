import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediumCloneFeatureRegisterComponent } from './medium-clone-feature-register.component';

describe('MediumCloneFeatureRegisterComponent', () => {
  let component: MediumCloneFeatureRegisterComponent;
  let fixture: ComponentFixture<MediumCloneFeatureRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediumCloneFeatureRegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MediumCloneFeatureRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
