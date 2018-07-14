import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.css']
})
export class RendererComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() inputarray ;
 
}
