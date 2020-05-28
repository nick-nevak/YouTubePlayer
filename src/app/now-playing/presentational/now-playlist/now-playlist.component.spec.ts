import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlaylistComponent } from './now-playlist.component';

describe('NowPlaylistComponent', () => {
  let component: NowPlaylistComponent;
  let fixture: ComponentFixture<NowPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
