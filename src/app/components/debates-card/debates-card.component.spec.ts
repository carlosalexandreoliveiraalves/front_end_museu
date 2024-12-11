import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebatesCardComponent } from './debates-card.component';

describe('DebatesCardComponent', () => {
  let component: DebatesCardComponent;
  let fixture: ComponentFixture<DebatesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebatesCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebatesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
