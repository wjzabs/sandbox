import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IgxAutocompleteModule, IgxDropDownModule, IgxInputGroupModule } from '@infragistics/igniteui-angular';
import { Comp1Component, Comp1PipeStartsWith } from './comp1.component';

describe('Comp1Component', () => {
  let component: Comp1Component;
  let fixture: ComponentFixture<Comp1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Comp1Component, Comp1PipeStartsWith],
      imports: [FormsModule, IgxDropDownModule, IgxAutocompleteModule, NoopAnimationsModule, IgxInputGroupModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
