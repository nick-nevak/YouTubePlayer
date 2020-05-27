import { createAction, props } from '@ngrx/store';

const ADD = '[YoutubeVideos] ADD_VIDEOS';
const REMOVE = '[YoutubeVideos] REMOVE';
const RESET = '[YoutubeVideos] RESET';
const UPDATE_METADATA = '[YoutubeVideos] UPDATE_METADATA';
const SEARCH_NEW_QUERY = '[YoutubeVideos] SEARCH_NEW_QUERY';
const SEARCH_ENDED_SUCCESS = '[YoutubeVideos] SEARCH_ENDED_SUCCESS';
const SEARCH_START = '[YoutubeVideos] SEARCH_START';
const SEARCH_MORE = '[YoutubeVideos] SEARCH_MORE';
const SEARCH_PRESET = '[YoutubeVideos] SEARCH_PRESET';

export const addVideos = createAction(
  ADD,
  props<{videos: GoogleApiYouTubeVideoResource[]}>()
);

export const removeVideo = createAction(
  REMOVE
);

export const reset = createAction(
  RESET
);

export const updateMetaData = createAction(
  UPDATE_METADATA,
  props<GoogleApiYouTubeVideoResource>()
);

export const searchNewQuery = createAction(
  SEARCH_NEW_QUERY,
  props<{ query: string }>()
);

export const searchEndedSuccess = createAction(
  SEARCH_ENDED_SUCCESS,
  props<{ items: GoogleApiYouTubeSearchResource[] }>()
);

export const searchStart = createAction(
  SEARCH_START,
  props<{ query: string }>()
);

export const searchMore = createAction(
  SEARCH_MORE
);

export const searchPreset = createAction(
  SEARCH_PRESET,
  props<{ preset: string }>()
);

