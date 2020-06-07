import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EchoesVideos, videosReducer } from './youtube-videos/youtube-videos.reducer';
import { YoutubeMediaPlaylist, nowPlaylistReducer } from './now-playlist/now-playlist.reducer';
import { YoutubeVideosEffects } from './youtube-videos/youtube-videos.effects';

export interface EchoesState {
  videos: EchoesVideos;
  nowPlaylist: YoutubeMediaPlaylist;
}

const reducers = {
  videos: videosReducer,
  nowPlaylist: nowPlaylistReducer
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([YoutubeVideosEffects])
  ]
})
export class CoreStoreModule { }
