import { Component } from '@angular/core';
import { MainContainerComponent } from '../layout/main-container';
import { SocialMediaComponent } from "../social-media/social-media.component";

@Component({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.scss',
    imports: [MainContainerComponent, SocialMediaComponent]
})
export class WelcomeComponent {

}
