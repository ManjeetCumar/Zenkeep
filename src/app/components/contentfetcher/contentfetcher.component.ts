import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contentfetcher',
  templateUrl: './contentfetcher.component.html',
  styleUrls: ['./contentfetcher.component.css']
})
export class ContentfetcherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() todisplay;
  public allNotes = ["note 1","note 2","note 3","note 4",
  "noteafsdafasdfasdfadsfdsfdf 5","note 6","note 7dfsdfdsfdsdsfsffafafafsdf fggfgfdfgfdg",
  "note 8","note 9","notadfdsfsdffasdfadsfadsffasjfghjfjfhhgfadfsdfafafddasfsdfasdfasdfasdfdsafe 10",
  "note 1","note 2","note 3","note 4afsdfsdfasdfadfgasdfa","note 5" ]

}
