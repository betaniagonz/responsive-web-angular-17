import { Component } from '@angular/core';
import { SocialMediaElementComponent } from './social-media-element';
import { SocialMedia } from './models';
import { MainContainerComponent } from '../layout/main-container';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [SocialMediaElementComponent, MainContainerComponent],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  socialMediaList: SocialMedia[] = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/profile.php?id=100086344637437',
      imgPath: 'assets/images/facebook.png'
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/betanydev',
      imgPath: 'assets/images/x.png'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/betanydev/',
      imgPath: 'assets/images/instagram.png'
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/betania-gonzalez/',
      imgPath: 'assets/images/linkedin.png'
    },
    {
      name: 'Github',
      link: 'https://github.com/betaniagonz',
      imgPath: 'assets/images/github.png'
    },
    {
      name: 'TikTok',
      link: 'https://www.tiktok.com/@betanydev',
      imgPath: 'assets/images/tik-tok.png'
    }
  ]
}
