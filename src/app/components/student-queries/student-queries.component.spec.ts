import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQueriesComponent } from './student-queries.component';

describe('StudentQueriesComponent', () => {
  let component: StudentQueriesComponent;
  let fixture: ComponentFixture<StudentQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentQueriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
