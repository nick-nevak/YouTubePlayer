import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-youtube-media',
  templateUrl: './youtube-media.component.html',
  styleUrls: ['./youtube-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubeMediaComponent implements OnInit {
  @Input() media: GoogleApiYouTubeVideoResource;
  @Output() play = new EventEmitter();
  @Output() queue = new EventEmitter();
  @Output() add = new EventEmitter();

  showDesc = false;
  isPlaying = false;

  ngOnInit() { }

  playVideo(media: GoogleApiYouTubeVideoResource) {
    this.play.next(media);
  }

  queueVideo(media: GoogleApiYouTubeVideoResource) {
    this.queue.next(media);
  }

  addVideo(media: GoogleApiYouTubeVideoResource) {
    this.add.next(media);
  }

  toggle(showDesc: boolean) {
    this.showDesc = !showDesc;
  }
}
