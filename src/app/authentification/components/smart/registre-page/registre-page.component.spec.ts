import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrePageComponent } from './registre-page.component';

describe('RegistrePageComponent', () => {
  let component: RegistrePageComponent;
  let fixture: ComponentFixture<RegistrePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
