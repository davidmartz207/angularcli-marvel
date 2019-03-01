import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesTabComponent } from './heroes-tab.component';

describe('HeroesTabComponent', () => {
  let component: HeroesTabComponent;
  let fixture: ComponentFixture<HeroesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
