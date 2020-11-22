import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})

export class GlobalComponent implements OnInit {
  @Input() globalData;
  @Input() spainData;
  
  constructor() { }

  ngOnInit(): void {
  }

}
