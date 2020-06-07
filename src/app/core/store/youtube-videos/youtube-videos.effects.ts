import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { YoutubeVideosHttpService } from '../../services/youtube-videos-http.service';
import { filter, tap, map, withLatestFrom, switchMap } from 'rxjs/operators';
import { reset, searchStart, searchNewQuery, searchEndedSuccess, addVideos, searchMore } from './youtube-videos.actions';
import { Store } from '@ngrx/store';
import { EchoesState } from '../core-store.module';


@Injectable()
export class YoutubeVideosEffects {

  constructor(private actions$: Actions,
              private store: Store<EchoesState>,
              private youtubeVideosHttpService: YoutubeVideosHttpService) { }

  @Effect()
  resetVideos$ = this.actions$
    .pipe(
      ofType(searchNewQuery),
      filter(action => this.youtubeVideosHttpService.isNewSearchQuery(action.query)),
      tap(() => this.youtubeVideosHttpService.resetNextPageToken()),
      map(() => reset())
    );

  @Effect()
  startSearch$ = this.actions$
    .pipe(
      ofType(searchNewQuery),
      filter(action => this.youtubeVideosHttpService.isNewSearchQuery(action.query)),
      map(action => searchStart({ query: action.query }))
    );

  @Effect()
  searchStart$ = this.actions$
    .pipe(
      ofType(searchStart),
      withLatestFrom(this.store.select(state => state.videos)),
      switchMap(([action, state]) => this.youtubeVideosHttpService.search(`${action.query}`)),
      map(mediaItems => mediaItems.map(video => video.id.videoId)),
      map(mediaIds => searchEndedSuccess({ mediaIds })),
    );

  @Effect()
  fetchMetadata$ = this.actions$
    .pipe(
      ofType(searchEndedSuccess),
      switchMap(action => this.youtubeVideosHttpService.fetchVideoData(action.mediaIds)),
      map(videos => addVideos({ videos }))
    );

  @Effect()
  searchMoreVideos$ = this.actions$
    .pipe(
      ofType(searchMore),
      withLatestFrom(this.store.select(state => state.videos)),
      // tap(() => this.youtubeSearch.searchMore()),
      map(([action, state]) => searchStart({ query: state.query }))
    );

}
