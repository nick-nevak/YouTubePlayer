import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YOUTUBE_API_KEY } from './constants';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


export interface ApiConfig {
  lastQuery?: string;
  nextPageToken?: string;
}

@Injectable()
export class YoutubeVideosHttpService {
  private searchUrl = 'https://www.googleapis.com/youtube/v3/search';
  private videosUrl = 'https://www.googleapis.com/youtube/v3/videos';
  private config: ApiConfig = { nextPageToken: ''};

  constructor(private httpClient: HttpClient) { }

  search(query: string): Observable<GoogleApiYouTubeSearchResource[]> {
    this.config.lastQuery = query;

    const parameters: HttpParams = new HttpParams({
      fromObject: {
        part: 'id,snippet',
        key: YOUTUBE_API_KEY,
        maxResults: '50',
        pageToken: this.config.nextPageToken,
        q: query,
        type: 'video'
      }
    });
    return this.httpClient.get(this.searchUrl, { params: parameters })
      .pipe(
        tap((r: any) => this.config.nextPageToken = r.nextPageToken),
        map((r: any) => r.items as GoogleApiYouTubeSearchResource[])
      );
  }

  fetchVideoData(mediaIds: string[]) {
    const parameters: HttpParams = new HttpParams()
      .set('part', 'snippet,contentDetails,statistics')
      .set('key', YOUTUBE_API_KEY)
      .set('id', mediaIds.join(','))
      .set('maxResults', '50');
    return this.httpClient.get(this.videosUrl, { params: parameters })
      .pipe(
        map((r: any) => r.items as GoogleApiYouTubeVideoResource[])
      );
  }

  resetNextPageToken(): void{
    this.config.nextPageToken = '';
  }

  isNewSearchQuery(query: string): boolean {
    return this.config.lastQuery !== query;
  }

}
