import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EchoesVideos, videosReducer } from './youtube-videos';

export interface EchoesState {
  videos: EchoesVideos;
  // nowPlaylist: YoutubeMediaPlaylist;
}

const reducers = {
  videos: videosReducer
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers)
  ]
})
export class CoreStoreModule { }
