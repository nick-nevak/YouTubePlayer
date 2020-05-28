import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { YOUTUBE_API_KEY } from './constants';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class YoutubeVideosHttpService {
  private nextPageToken = '';
  private searchUrl = 'https://www.googleapis.com/youtube/v3/search';
  private videosUrl = 'https://www.googleapis.com/youtube/v3/videos';
  private fullUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet,id&key=AIzaSyCOPMSEtsVqHiKM_-gusPjh7wO-l9fIC3k&maxResults=50&pageToken=&q=dd%20&type=video';
  private fullUrl2 = 'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&key=AIzaSyCOPMSEtsVqHiKM_-gusPjh7wO-l9fIC3k&maxResults=50&pageToken=&id=d7wRN2sUfVM,7NOY4gybkpE,BIrEO1vUoZM,es708j310Jc,inJ5IXJ93G8,dtu3tURlf7o,XI2sXvesncc,wVEZzX214FQ,eavmwnEZGiM,AvWkcmjbKrg,J_cEHhHVZRU,b7EN23OEs4A,FKA92JOUEic,GD8Oz3HjxMk,Q7BY7DClV4c,ZxjVJeDjbOQ,gN40BtwoUV8,voEoyhUS5Iw,URXXaE52NlM,I3kTaNSHSOo,_FXVw-keKgI,gSSSPXI4-rQ,z9kFqJTKoUk,P7XZSvnKZNA,40llML-itr8,TehbBeygHYg,LKZvsFulUS0,Clj27WjZNO4,X50RifV53WQ,gtZAkXG2cac,NELyHJz0BoY,bMPymLv341o,WfEnRqC6yUM,fJmeRw3pSyk,L2zy9L5Y95k,iuE79YIeCio,Ja7yBF5WzOk,XCjvKbR3eJg,ZAfZGhE13fY,tZyMmoRI30s,0sMF1-GzGPo,_mMxQDsiwN8,A9UGUEjiBR0,7PbJbtsAIVg,qvVRX7sdq_g,PfLtSeAfiSc,u28ouSjTyxo,DCeC2PrS6QM,aGfCjy8xn2g,vmCjhQ5_Pb0'
  constructor(private httpClient: HttpClient) { }

  search(query: string): Observable<GoogleApiYouTubeSearchResource[]> {
    const parameters: HttpParams = new HttpParams({
      fromObject: {
        part: 'id,snippet',
        key: YOUTUBE_API_KEY,
        maxResults: '50',
        pageToken: '',
        q: query,
        type: 'video'
      }
    });
    return this.httpClient.get(this.searchUrl, { params: parameters })
      .pipe(
        tap((r: any) => this.nextPageToken = r.nextPageToken),
        map((r: any) => r.items as GoogleApiYouTubeSearchResource[])
      );
  }

  fetchVideoData(mediaId: string[]) {
    const parameters: HttpParams = new HttpParams()
      .set('part', 'snippet,contentDetails,statistics')
      .set('key', YOUTUBE_API_KEY)
      .set('id', mediaId.join(','))
      .set('maxResults', '50');
    return this.httpClient.get(this.videosUrl, { params: parameters })
    .pipe(
      map((r: any) => r.items as GoogleApiYouTubeVideoResource[])
    );

  }
}
