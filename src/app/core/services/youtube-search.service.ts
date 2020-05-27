import { Injectable } from '@angular/core';
import { YoutubeApiFactoryService, YoutubeApiService } from './youtube-api.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class YoutubeSearchService {
  url: string = 'https://www.googleapis.com/youtube/v3/search';
  api: YoutubeApiService;
  isSearching: boolean = false;

  constructor(private http: HttpClient, apiFactory: YoutubeApiFactoryService) {
    this.api = apiFactory.create();
    this.api.setOptions({
      url: this.url,
      http: http,
      config: {
        part: 'snippet,id',
        q: '',
        type: 'video'
      }
    });
  }

  search(query: string, shouldBeReset?: boolean) {
    const isNewSearch = this.isNewSearchQuery(query);

    if (shouldBeReset || isNewSearch) {
      this.resetPageToken();
    }
    if (query) {
      this.api.config.set('q', query);
    }

    this.isSearching = true;
    return this.api.list('video')
    .pipe(
      map((response: any) => {
        this.isSearching = false;
        return response.items;
      })
    )
  }

  searchMore() {
    if (!this.isSearching) {
      return this.api.setNextPageToken();
    }
  }

  resetPageToken() {
    this.api.resetPageToken();
  }

  isNewSearchQuery(query: string) {
    return query !== this.api.config.get('q');
  }
}
