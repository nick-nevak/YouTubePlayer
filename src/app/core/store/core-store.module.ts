import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EchoesVideos, videosReducer } from './youtube-videos/youtube-videos.reducer';
import { YoutubeMediaPlaylist, nowPlaylistReducer } from './now-playlist/now-playlist.reducer';

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
    StoreModule.forRoot(reducers)
  ]
})
export class CoreStoreModule { }
