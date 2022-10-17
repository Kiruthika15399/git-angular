import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiruthikaComponentTwoComponent } from './kiruthika-component-two.component';

describe('KiruthikaComponentTwoComponent', () => {
  let component: KiruthikaComponentTwoComponent;
  let fixture: ComponentFixture<KiruthikaComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiruthikaComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiruthikaComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
