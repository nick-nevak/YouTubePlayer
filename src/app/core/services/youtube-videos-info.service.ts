
import { Injectable } from '@angular/core';
import { YoutubeApiFactoryService, YoutubeApiService } from './youtube-api.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class YoutubeVideosInfoService {
  private api: YoutubeApiService;

  constructor(private http: HttpClient, private apiFactory: YoutubeApiFactoryService) {
    this.api = apiFactory.create();
    this.api.setOptions({
      url: 'https://www.googleapis.com/youtube/v3/videos',
      http: this.http,
      idKey: 'id',
      config: {
        part: 'snippet,contentDetails,statistics'
      }
    });
  }

  fetchVideoData(mediaId: string[]) {
    return this.api
      .list(mediaId)
      .pipe(map(response => response.items));
  }
}
