import { Injectable } from '@angular/core';
import { ActionReducer, Action, createReducer, on } from '@ngrx/store';
import * as NowPlaylistActions from './now-playlist.actions';

export interface YoutubeMediaPlaylist {
  videos: GoogleApiYouTubeVideoResource[];
  index: string;
  filter: string;
}

const initialState: YoutubeMediaPlaylist = {
  videos: [],
  index: '',
  filter: ''
};

const reducer = createReducer(
  initialState,
  on(NowPlaylistActions.selectVideo, (state, { media }) => ({...state, index: media.id})),
  on(NowPlaylistActions.queueVideo, (state, { media }) => ({ ...state, videos: addMedia(state.videos, media) })),
  on(NowPlaylistActions.queueVideos, (state, { videos }) => ({ ...state, videos: addMedias(state.videos, videos) })),
  on(NowPlaylistActions.removeVideo, (state, { media }) => ({ ...state, videos: state.videos.filter(video => video.id !== media.id) })),
  on(NowPlaylistActions.updateIndexByMedia, (state, { mediaId }) => ({ ...state, index: mediaId })),
  on(NowPlaylistActions.changeFilter, (state, { filter }) => ({ ...state, filter })),
  on(NowPlaylistActions.removeAll, (state) => ({ ...state, videos: [], filter: '', index: '0'})),
  on(NowPlaylistActions.selectNext, (state) => ({ ...state, index: selectNextIndex(state.videos, state.index) })),
  on(NowPlaylistActions.selectPrevious, (state) => ({ ...state, index: selectPreviousIndex(state.videos, state.index) }))
);

export function nowPlaylistReducer(state: YoutubeMediaPlaylist | undefined = initialState, action: Action) {
  return reducer(state, action);
}

function addMedia(videos: GoogleApiYouTubeVideoResource[], media: any) {
  const newMedia = [...videos].findIndex(video => video.id === media.id);
  const newVideos = newMedia === -1 ? videos.push(media) : videos;
  return [...videos];
}

function addMedias(videos, medias) {
  const allVideoIds = videos.map(video => video.id);
  let newVideos = [];
  medias.forEach(media => {
    if (allVideoIds.indexOf(media.id) === -1) {
      newVideos.push(media);
    }
  });
  return videos.concat(newVideos);
}

function selectNextIndex(videos: GoogleApiYouTubeVideoResource[], index: string): string {
  let currentIndex: number = videos.findIndex(video => video.id === index);
  let nextIndex = currentIndex + 1;
  if (!videos.length) {
    nextIndex = 0;
  }
  if (videos.length === nextIndex) {
    nextIndex = 0;
  }

  return videos[nextIndex].id || '';
}

function selectPreviousIndex(videos: GoogleApiYouTubeVideoResource[], index: string): string {
  let currentIndex: number = videos.findIndex(video => video.id === index);
  let previousIndex = currentIndex - 1;
  if (!videos.length || previousIndex < 0) {
    previousIndex = 0;
  }

  return videos[previousIndex].id || '';
}
