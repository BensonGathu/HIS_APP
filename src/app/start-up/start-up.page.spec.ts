import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartUpPage } from './start-up.page';

describe('StartUpPage', () => {
  let component: StartUpPage;
  let fixture: ComponentFixture<StartUpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StartUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
