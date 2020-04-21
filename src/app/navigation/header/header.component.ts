import { Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  @HostBinding('class') componentCssClass;

  constructor() {
  }

  ngOnInit(): void {
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  getTheme(): String {
    if (document.body.classList.contains('my-page-dark-theme')) {
      return 'my-page-dark-theme';
    } else if (document.body.classList.contains('my-page-light-theme')) {
      return 'my-page-light-theme';
    }
  }

  changeTheme(): void {
    if (document.body.classList.contains('my-page-dark-theme')) {
      document.body.classList.remove('my-page-dark-theme');
      document.body.classList.add('my-page-light-theme');
    } else if (document.body.classList.contains('my-page-light-theme')) {
      document.body.classList.remove('my-page-light-theme');
      document.body.classList.add('my-page-dark-theme');
    } else {
      document.body.classList.add('my-page-light-theme');
    }
  }
}
