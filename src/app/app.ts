import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './shared/components/side-bar.component/side-bar.component';
import { PagesModule } from './pages/pages-module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PagesModule, SideBarComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('NatureApp');
}
