import { NgModule } from '@angular/core';
import { NowPlayingComponent } from './container/now-playing/now-playing.component';
import { NowPlaylistFilterComponent } from './presentational/now-playlist-filter/now-playlist-filter.component';
import { NowPlaylistComponent } from './presentational/now-playlist/now-playlist.component';
import { SharedModule } from '../shared/shared.module';
import { PlayerModule } from '../player/player.module';



@NgModule({
  declarations: [
    NowPlayingComponent,
    NowPlaylistFilterComponent,
    NowPlaylistComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NowPlayingComponent
  ]
})
export class NowPlayingModule { }
