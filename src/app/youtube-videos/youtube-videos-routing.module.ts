import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YoutubeVideosComponent } from './container/youtube-videos/youtube-videos.component';


const routes: Routes = [
    { path: '', component: YoutubeVideosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YoutubeVideosRoutingModule { }
