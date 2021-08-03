import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public showControls: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  setCard(): string {
    return this.showControls ? 'justify-content-between' : 'justify-content-center';
  }
}
