import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowPlayingComponent } from './container/now-playing/now-playing.component';
import { NowPlaylistFilterComponent } from './presentational/now-playlist-filter/now-playlist-filter.component';
import { NowPlaylistComponent } from './presentational/now-playlist/now-playlist.component';



@NgModule({
  declarations: [
    NowPlayingComponent,
    NowPlaylistFilterComponent,
    NowPlaylistComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NowPlayingComponent
  ]
})
export class NowPlayingModule { }
