import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebStatsComponent } from './web-stats.component';

describe('WebStatsComponent', () => {
  let component: WebStatsComponent;
  let fixture: ComponentFixture<WebStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
