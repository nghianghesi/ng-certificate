import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipCodeSelectorComponent } from './zip-code-selector.component';

describe('ZipCodeSelectorComponent', () => {
  let component: ZipCodeSelectorComponent;
  let fixture: ComponentFixture<ZipCodeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipCodeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipCodeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
