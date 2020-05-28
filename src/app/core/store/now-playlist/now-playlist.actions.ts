
import { props, createAction } from '@ngrx/store';

const QUEUE_LOAD_VIDEO = '[NOW PLAYLIST] QUEUE_LOAD_VIDEO';
const QUEUE = '[NOW PLAYLIST] QUEUE';
const QUEUE_LOAD_VIDEO_SUCCESS = '[NOW PLAYLIST] QUEUE_LOAD_VIDEO_SUCCESS';
const SELECT = '[NOW PLAYLIST] SELECT';
const REMOVE = '[NOW PLAYLIST] REMOVE';
const UPDATE_INDEX = '[NOW PLAYLIST] UPDATE_INDEX';
const QUEUE_FAILED = '[NOW PLAYLIST] QUEUE_FAILED';
const FILTER_CHANGE = '[NOW PLAYLIST] FILTER_CHANGE';
const REMOVE_ALL = '[NOW PLAYLIST] REMOVE_ALL';
const SELECT_NEXT = '[NOW PLAYLIST] SELECT_NEXT';
const SELECT_PREVIOUS = '[NOW PLAYLIST] SELECT_PREVIOUS';
const QUEUE_VIDEOS = '[NOW PLAYLIST] QUEUE_VIDEOS';


export const queueLoadVideo = createAction(
  QUEUE_LOAD_VIDEO,
  props<{media: any}>()
);

export const queueVideo = createAction(
  QUEUE,
  props<{media: GoogleApiYouTubeVideoResource}>()
);

export const updateIndexByMedia = createAction(
  UPDATE_INDEX,
  props<{mediaId: string}>()
);

export const queueFailed = createAction(
  QUEUE_FAILED,
  props<{media: any}>()
);

export const queueVideos = createAction(
  QUEUE_VIDEOS,
  props<{videos: any}>()
);

export const selectVideo = createAction(
  SELECT,
  props<{media: GoogleApiYouTubeVideoResource}>()
);

export const removeVideo = createAction(
  REMOVE,
  props<{media: any}>()
);

export const changeFilter = createAction(
  FILTER_CHANGE,
  props<{filter: string}>()
);

export const removeAll = createAction(
  REMOVE_ALL
);

export const selectNext = createAction(
  SELECT_NEXT
);

export const selectPrevious = createAction(
  SELECT_PREVIOUS
);

export const queueLoadVideoSuccess = createAction(
  QUEUE_LOAD_VIDEO_SUCCESS
);

