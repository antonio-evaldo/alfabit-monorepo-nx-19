import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TesteBuildablePublishableComponent } from './teste-buildable-publishable.component';

describe('TesteBuildablePublishableComponent', () => {
  let component: TesteBuildablePublishableComponent;
  let fixture: ComponentFixture<TesteBuildablePublishableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteBuildablePublishableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TesteBuildablePublishableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
