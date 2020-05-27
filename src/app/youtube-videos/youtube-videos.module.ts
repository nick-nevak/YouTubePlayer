import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeListComponent } from './presentational/youtube-list/youtube-list.component';
import { YoutubeMediaComponent } from './presentational/youtube-media/youtube-media.component';
import { YoutubeVideosComponent } from './container/youtube-videos/youtube-videos.component';
import { YoutubeVideosRoutingModule } from './youtube-videos-routing.module';



@NgModule({
  declarations: [
    YoutubeVideosComponent,
    YoutubeListComponent,
    YoutubeMediaComponent
  ],
  imports: [
    CommonModule,
    YoutubeVideosRoutingModule
  ]
})
export class YoutubeVideosModule { }
