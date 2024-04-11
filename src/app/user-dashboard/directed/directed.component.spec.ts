import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectedComponent } from './directed.component';

describe('DirectedComponent', () => {
  let component: DirectedComponent;
  let fixture: ComponentFixture<DirectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
