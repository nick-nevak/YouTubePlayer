import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-youtube-list',
  templateUrl: './youtube-list.component.html',
  styleUrls: ['./youtube-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class YoutubeListComponent {
  @Input() list: any;
  @Output() play = new EventEmitter();
  @Output() queue = new EventEmitter();
  @Output() add = new EventEmitter();

  constructor() { }

  playSelectedVideo(media) {
    this.play.next(media);
  }

  queueSelectedVideo(media) {
    this.queue.next(media);
  }

  addVideo(media) {
    this.add.next(media);
  }

}
