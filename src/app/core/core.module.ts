import { NgModule } from '@angular/core';
import { CoreStoreModule } from './store/core-store.module';
import { NowPlaylistService } from './services/now-playlist.service';
import { YoutubeVideosHttpService } from './services/youtube-videos-http.service';
import { YoutubeVideosInfoService } from './services/youtube-videos-info.service';
import { YoutubeSearchService } from './services/youtube-search.service';
import { YoutubeApiService, YoutubeApiFactoryService } from './services/youtube-api.service';
import { PlayerService } from './services/player.service';

@NgModule({
  imports: [
    CoreStoreModule
  ],
  exports: [
    CoreStoreModule
  ],
  providers:[
    YoutubeApiFactoryService,
    YoutubeApiService,
    YoutubeSearchService,
    YoutubeVideosInfoService,
    YoutubeVideosHttpService,
    NowPlaylistService,
    PlayerService
  ]
})
export class CoreModule { }
