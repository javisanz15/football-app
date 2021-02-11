/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BestLineupComponent } from './best-lineup.component';

describe('BestLineupComponent', () => {
  let component: BestLineupComponent;
  let fixture: ComponentFixture<BestLineupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestLineupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestLineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
