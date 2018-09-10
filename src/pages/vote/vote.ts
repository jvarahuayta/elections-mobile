import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CandidatesService } from '../../core/services/candidates.service';
import { Candidate } from '../../core/models/candidate.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastUtil } from '../../core/utils/toast.util';
import { VotesService } from '../../core/services/votes.service';
import { Vote } from '../../core/models/vote.model';
import { User } from '../../core/models/user.model';

/**
 * Generated class for the VotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vote',
  templateUrl: 'vote.html',
})
export class VotePage {

  candidateList: Candidate[];
  voteFG: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private candidates: CandidatesService,
  private fb: FormBuilder, private toast: ToastUtil, private votes: VotesService) {
    this.voteFG = this.fb.group({
      candidate: [null,[Validators.required]],
      dni: ['',[Validators.required]]
    })
    this.candidates.find().subscribe( candidateList => {
      this.showCandidates(candidateList);
    })
  }

  showCandidates(candidateList: Candidate[]){
    this.candidateList = candidateList;
  }

  onSubmitVote(){
    if( !this.voteFG.valid ){
      if( !this.voteFG.value.dni ){
        this.toast.error('DNI is required!');
      }else if( !this.voteFG.value.candidate ){
        this.toast.error('Must select a candidate!');
      }
      return;
    }
    this.votes.add( new Vote({
      user: new User({ dni: this.voteFG.value.dni }),
      candidate: this.voteFG.value.candidate
    }) ).subscribe( created => {
      if(created){
        this.toast.success('Success vote. Thanks!');
      }else{
        this.toast.error('Have you already voted?');
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VotePage');
  }

}
