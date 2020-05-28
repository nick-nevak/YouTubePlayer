import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlaylistFilterComponent } from './now-playlist-filter.component';

describe('NowPlaylistFilterComponent', () => {
  let component: NowPlaylistFilterComponent;
  let fixture: ComponentFixture<NowPlaylistFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowPlaylistFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowPlaylistFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
