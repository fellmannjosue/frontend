import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescrGodfatherComponent } from './descr-godfather.component';

describe('DescrGodfatherComponent', () => {
  let component: DescrGodfatherComponent;
  let fixture: ComponentFixture<DescrGodfatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescrGodfatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescrGodfatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
