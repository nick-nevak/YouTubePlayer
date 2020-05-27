import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeVideosComponent } from './youtube-videos.component';

describe('YoutubeVideosComponent', () => {
  let component: YoutubeVideosComponent;
  let fixture: ComponentFixture<YoutubeVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
