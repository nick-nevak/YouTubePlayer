import { ActionReducer, Action, createReducer, on } from '@ngrx/store';
import * as YoutubeVideosActions from './youtube-videos.actions';
import { state } from '@angular/animations';
export type GoogleApiYoutubeVideo = GoogleApiYouTubeVideoResource | Object;

export interface EchoesVideos {
  results: GoogleApiYoutubeVideo[];
  query: string;
  preset: string;
  isSearching: boolean;
}

const initialState: EchoesVideos = {
  results: [],
  query: '',
  preset: '',
  isSearching: false
};

const reducer = createReducer(
    initialState,
    on(YoutubeVideosActions.addVideos, (state, { videos }) => ({...state, results: [...state.results, ...videos]})),
    on(YoutubeVideosActions.removeVideo, (state) => state),
    on(YoutubeVideosActions.reset, (state) => ({...state, results: []})),
    on(YoutubeVideosActions.searchStart, (state) => ({...state, isSearching: true})),
    on(YoutubeVideosActions.searchEndedSuccess, (state) => ({...state, isSearching: false})),
    on(YoutubeVideosActions.searchNewQuery, (state, { query }) => ({ ...state, query })),
    on(YoutubeVideosActions.searchPreset, (state, { preset }) => ({ ...state, preset })),
);

export function videosReducer(state: EchoesVideos | undefined = initialState, action: Action) {
    return reducer(state, action);
}

