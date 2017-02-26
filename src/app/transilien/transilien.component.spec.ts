import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransilienComponent } from './transilien.component';

describe('TransilienComponent', () => {
  let component: TransilienComponent;
  let fixture: ComponentFixture<TransilienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransilienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransilienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
