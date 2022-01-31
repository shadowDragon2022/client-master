import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public year: number = new Date().getFullYear();
  public readonly version: string = 'V1.0';

  constructor() { }

  ngOnInit() {
  }

}
