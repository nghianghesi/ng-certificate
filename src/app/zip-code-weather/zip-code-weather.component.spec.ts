import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipCodeWeatherComponent } from './zip-code-weather.component';

describe('ZipCodeWeatherComponent', () => {
  let component: ZipCodeWeatherComponent;
  let fixture: ComponentFixture<ZipCodeWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipCodeWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipCodeWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
