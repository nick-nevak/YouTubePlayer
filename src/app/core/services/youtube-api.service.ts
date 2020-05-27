import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YOUTUBE_API_KEY } from './constants';
import { map } from 'rxjs/operators';

interface YoutubeApiServiceOptions {
  url?: string;
  http: HttpClient;
  idKey?: string;
  config?: any;
}

@Injectable()
export class YoutubeApiFactoryService {
  create(): YoutubeApiService {
    return new YoutubeApiService();
  }
}

export class YoutubeApiService {
  url: string;
  http: HttpClient;
  idKey: string;
  isSearching: boolean = false;
  config: URLSearchParams = new URLSearchParams();
  nextPageToken: string;
  private accessToken: string;

  constructor() { }

  setOptions(options: YoutubeApiServiceOptions) {
    this.resetConfig();
    if (options) {
      this.url = options.url;
      this.http = options.http;
      this.idKey = options.idKey || '';
      if (options.config) {
        this.setConfig(options.config);
      }
    }
  }

  setConfig(config) {
    Object.keys(config).forEach(option => {
      this.config.set(option, config[option]);
    });
  }

  setToken(token: string) {
    this.accessToken = token;
  }

  hasToken(): boolean {
    return this.accessToken.length > 0;
  }

  resetConfig() {
    this.config.set('part', 'snippet,contentDetails');
    this.config.set('key', YOUTUBE_API_KEY);
    this.config.set('maxResults', '50');
    this.config.set('pageToken', '');
  }

  // getList() {
  //   const accessToken = this.accessToken;
  //   this.isSearching = true;
  //   let options = {
  //     params: this.config,
  //     headers: accessToken ? new Headers({ Authorization: `Bearer ${accessToken}` }) : new Headers()
  //   };
  //   return this.http.get(this.url, options)
  //     .map(response => response.json());
  // }

  list(id, token?) {
    if (this.idKey) {
      this.config.set(this.idKey, id);
    }

    this.isSearching = true;
    let options = {
      search: this.config,
      headers: token ? new Headers({ Authorization: `Bearer ${token}` }) : new Headers()
    };
    return this.http.get(this.url, options as any)
    .pipe(
      map((response: any) => {
      this.nextPageToken = response.nextPageToken;
      this.isSearching = false;
      return response;
    })
    )
  }

  setNextPageToken() {
    if (!this.isSearching) {
      this.config.set('pageToken', this.nextPageToken);
    }
    return this.nextPageToken;
  }

  resetPageToken() {
    this.config.set('pageToken', '');
  }
}
