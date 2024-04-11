import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodfatherComponent } from './godfather.component';

describe('GodfatherComponent', () => {
  let component: GodfatherComponent;
  let fixture: ComponentFixture<GodfatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GodfatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GodfatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
