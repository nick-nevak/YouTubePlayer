import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { YoutubeMediaPlaylist } from 'src/app/core/store/now-playlist/now-playlist.reducer';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-now-playlist-filter',
  templateUrl: './now-playlist-filter.component.html',
  styleUrls: ['./now-playlist-filter.component.scss']
})
export class NowPlaylistFilterComponent implements OnInit {

  @Input() playlist: YoutubeMediaPlaylist;
  @Output() clear = new EventEmitter<string>();
  @Output() filter = new EventEmitter<string>();
  @Output() reset = new EventEmitter<string>();

  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.setupForm();
  }

  handleFilterChange() {
    this.filter.emit(this.searchForm.value.search);
  }

  resetSearchFilter() {
    this.reset.emit('');
  }

  isFilterEmpty() {
    return this.playlist.filter === '';
  }

  clearPlaylist() {
    this.clear.emit('');
  }

  isPlaylistEmpty() {
    return this.playlistLength === 0;
  }

  get playlistLength() {
    return this.playlist.videos.length;
  }

  private setupForm() {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

}
