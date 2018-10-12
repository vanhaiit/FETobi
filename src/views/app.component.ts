import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ScriptLoaderService } from '../_services/script-loader.service';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ScriptLoaderService]
})
export class AppComponent implements OnInit {
  title = 'app';
  globalBodyClass = 'animsition';
  public isLogin = false;
  constructor(private _script: ScriptLoaderService) {

  }
  ngOnInit() {

  }
}
