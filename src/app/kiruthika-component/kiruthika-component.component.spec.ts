import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiruthikaComponentComponent } from './kiruthika-component.component';

describe('KiruthikaComponentComponent', () => {
  let component: KiruthikaComponentComponent;
  let fixture: ComponentFixture<KiruthikaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiruthikaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiruthikaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
