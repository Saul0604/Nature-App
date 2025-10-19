import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderosComponent } from './senderos.component';

describe('SenderosComponent', () => {
  let component: SenderosComponent;
  let fixture: ComponentFixture<SenderosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenderosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
