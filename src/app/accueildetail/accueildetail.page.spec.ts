import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccueildetailPage } from './accueildetail.page';

describe('AccueildetailPage', () => {
  let component: AccueildetailPage;
  let fixture: ComponentFixture<AccueildetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccueildetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
