import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsContainerComponent } from './grids-container.component';

describe('GridsContainerComponent', () => {
  let component: GridsContainerComponent;
  let fixture: ComponentFixture<GridsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
