import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './shared/components/side-bar.component/side-bar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('NatureApp');
}
