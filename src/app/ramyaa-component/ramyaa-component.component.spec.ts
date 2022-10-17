import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamyaaComponentComponent } from './ramyaa-component.component';

describe('RamyaaComponentComponent', () => {
  let component: RamyaaComponentComponent;
  let fixture: ComponentFixture<RamyaaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamyaaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamyaaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
