import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriedetailPage } from './categoriedetail.page';

describe('CategoriedetailPage', () => {
  let component: CategoriedetailPage;
  let fixture: ComponentFixture<CategoriedetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoriedetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
