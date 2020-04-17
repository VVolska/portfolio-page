import { HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
  constructor(
          private router: Router
  ) {
  }

  @HostListener('window:wheel', ['$event'])
  onWheelScroll(event: WheelEvent) {
    // Scroll down
    if (event.deltaY > 0) {
      switch (this.router.url) {
        case '/about-me': {
          this.router.navigate(['/about-me']);
          break;
        }
        case '/skills': {
          this.router.navigate(['/skills']);
          break;
        }
        case '/page3': {
          break;
        }
      }
    } else { // Scroll up
      switch (this.router.url) {
        case '/page1': {
          break;
        }
        case '/page2': {
          this.router.navigate(['/page1']);
          break;
        }
        case '/page3': {
          this.router.navigate(['/page2']);
          break;
        }
      }
    }
  }
}
