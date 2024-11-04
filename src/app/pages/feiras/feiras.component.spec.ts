import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeirasComponent } from './feiras.component';

describe('FeirasComponent', () => {
  let component: FeirasComponent;
  let fixture: ComponentFixture<FeirasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeirasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
