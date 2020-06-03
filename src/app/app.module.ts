import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YoutubeVideosModule } from './youtube-videos/youtube-videos.module';
import { CoreModule } from './core/core.module';
import { NowPlayingModule } from './now-playing/now-playing.module';
import { YoutubeApiFactoryService, YoutubeApiService } from './core/services/youtube-api.service';
import { YoutubeSearchService } from './core/services/youtube-search.service';
import { YoutubeVideosInfoService } from './core/services/youtube-videos-info.service';
import { YoutubeVideosHttpService } from './core/services/youtube-videos-http.service';
import { NowPlaylistService } from './core/services/now-playlist.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    YoutubeVideosModule,
    NowPlayingModule
  ],
  providers: [
    YoutubeApiFactoryService,
    YoutubeApiService,
    YoutubeSearchService,
    YoutubeVideosInfoService,
    YoutubeVideosHttpService,
    NowPlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
