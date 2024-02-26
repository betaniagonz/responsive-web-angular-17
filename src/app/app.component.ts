import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SocialMediaComponent, ToolbarComponent, WelcomeComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolbarComponent, WelcomeComponent, SocialMediaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ang17';
}
