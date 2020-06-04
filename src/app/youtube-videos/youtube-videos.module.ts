import { NgModule } from '@angular/core';
import { YoutubeListComponent } from './presentational/youtube-list/youtube-list.component';
import { YoutubeMediaComponent } from './presentational/youtube-media/youtube-media.component';
import { YoutubeVideosComponent } from './container/youtube-videos/youtube-videos.component';
import { YoutubeVideosRoutingModule } from './youtube-videos-routing.module';
import { YoutubeSearchComponent } from './presentational/youtube-search/youtube-search.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    YoutubeVideosComponent,
    YoutubeListComponent,
    YoutubeMediaComponent,
    YoutubeSearchComponent
  ],
  imports: [
    SharedModule,
    YoutubeVideosRoutingModule
  ]
})
export class YoutubeVideosModule { }
