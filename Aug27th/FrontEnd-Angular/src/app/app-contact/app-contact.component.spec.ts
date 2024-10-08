import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactComponent } from './app-contact.component';

describe('AppContactComponent', () => {
  let component: AppContactComponent;
  let fixture: ComponentFixture<AppContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
