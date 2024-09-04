import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItewlistComponent } from './itewlist.component';

describe('ItewlistComponent', () => {
  let component: ItewlistComponent;
  let fixture: ComponentFixture<ItewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItewlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
