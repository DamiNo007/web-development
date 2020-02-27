import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsAndShoesComponent } from './bags-and-shoes.component';

describe('BagsAndShoesComponent', () => {
  let component: BagsAndShoesComponent;
  let fixture: ComponentFixture<BagsAndShoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagsAndShoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsAndShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
