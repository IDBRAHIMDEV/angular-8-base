import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Input('my-like') like: number = 0;
  @Input('my-dislike') disLike: number = 0;

  incLike() {
     this.like++;
  }

  incDisLike() {
    this.disLike++;
  }

  constructor() { }

  ngOnInit() {
  }

}
