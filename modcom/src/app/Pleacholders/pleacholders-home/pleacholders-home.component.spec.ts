import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleacholdersHomeComponent } from './pleacholders-home.component';

describe('PleacholdersHomeComponent', () => {
  let component: PleacholdersHomeComponent;
  let fixture: ComponentFixture<PleacholdersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PleacholdersHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PleacholdersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
