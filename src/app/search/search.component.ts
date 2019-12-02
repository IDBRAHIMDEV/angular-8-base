import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string = "";

  @Output('searchItems') searchChildToParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  searchEngine() {
    this.searchChildToParent.emit(this.search);
  }
}