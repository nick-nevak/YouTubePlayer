import { NgModule } from '@angular/core';
import { PlayerComponent } from './container/player/player.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    PlayerComponent
  ]
})
export class PlayerModule { }
