import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTaksComponent } from './no-taks.component';

describe('NoTaksComponent', () => {
  let component: NoTaksComponent;
  let fixture: ComponentFixture<NoTaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoTaksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoTaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
