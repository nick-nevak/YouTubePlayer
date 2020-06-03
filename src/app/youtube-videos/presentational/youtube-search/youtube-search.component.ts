import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.scss']
})
export class YoutubeSearchComponent implements OnInit {

  @Output() searchUpdated = new EventEmitter<string>();
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.setupForm();
  }

  search(){
    this.searchUpdated.next(this.searchForm.value.mediaSearch);
  }

  private setupForm() {
    this.searchForm = this.formBuilder.group({
      mediaSearch: ''
    });
  }

}
