import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VotePage } from './vote';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    VotePage,
  ],
  entryComponents: [
    VotePage
  ],
  imports: [
    IonicPageModule.forChild(VotePage),
    SharedModule
  ],
})
export class VotePageModule {}
