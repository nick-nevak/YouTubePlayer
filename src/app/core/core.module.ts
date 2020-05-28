import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreStoreModule } from './store/core-store.module';
import { HttpClientModule } from '@angular/common/http';
import { YoutubeSearchService } from './services/youtube-search.service';
import { YoutubeApiService, YoutubeApiFactoryService } from './services/youtube-api.service';
import { YoutubeVideosInfoService } from './services/youtube-videos-info.service';
import { YoutubeVideosHttpService } from './services/youtube-videos-http.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreStoreModule,
    HttpClientModule
  ],
  providers: [
    YoutubeApiFactoryService,
    YoutubeApiService,
    YoutubeSearchService,
    YoutubeVideosInfoService,
    YoutubeVideosHttpService
  ]
})
export class CoreModule { }
