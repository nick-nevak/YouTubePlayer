import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { selectVideo, queueVideo } from './now-playlist.actions';
import { PlayerService } from '../../services/player.service';

@Injectable()
export class NowPlaylistEffects {
  constructor(
    private actions$: Actions,
    private playerService: PlayerService,
  ) { }

  @Effect()
  queueVideo$ = this.actions$
    .pipe(
      ofType(selectVideo),
      map(({ media }) => queueVideo({ media }))
    );

  @Effect({ dispatch: false })
  playVideo$ = this.actions$
    .pipe(
      ofType(selectVideo),
      tap(({ media }) => this.playerService.playVideo(media))
    );

}
