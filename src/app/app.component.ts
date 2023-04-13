import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showParagraph = false;
  logging = [];
  increment = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onDisplay() {
    this.showParagraph = true;
    this.increment += 1;
    this.logging.push(this.increment);
    setTimeout(() => {
      this.showParagraph = false;
    }, 1000);
  }

}
