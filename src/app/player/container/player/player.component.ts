import { Component, OnInit, AfterContentInit, ChangeDetectionStrategy } from '@angular/core';
import { PlayerService } from 'src/app/core/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerComponent implements AfterContentInit {

  constructor(
    private playerService: PlayerService,
  ) { }

  ngAfterContentInit() {
    const htmlId = 'yt-player-ng2-component';
    this.playerService.loadPlayerApi();
    this.playerService.setupPlayer(htmlId);
  }

}
