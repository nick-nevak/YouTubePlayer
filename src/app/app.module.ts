import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YoutubeVideosModule } from './youtube-videos/youtube-videos.module';
import { CoreModule } from './core/core.module';
import { NowPlayingModule } from './now-playing/now-playing.module';
import { SharedModule } from './shared/shared.module';
import { PlayerModule } from './player/player.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    YoutubeVideosModule,
    NowPlayingModule,
    PlayerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
