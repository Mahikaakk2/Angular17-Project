import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJoinerListComponent } from './new-joiner-list.component';

describe('NewJoinerListComponent', () => {
  let component: NewJoinerListComponent;
  let fixture: ComponentFixture<NewJoinerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewJoinerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewJoinerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
