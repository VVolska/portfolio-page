import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  constructor() {
  }
  listOfProjects: string[] = ['Sava Law', 'Portfolio Page', 'Snow Fun', 'K means', 'Arachnophobia'];
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  ngOnInit(): void {
    $(document).ready(() => {
      $('.parallax').parallax();
    });
  }
}
