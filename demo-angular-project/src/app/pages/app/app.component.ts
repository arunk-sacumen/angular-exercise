import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet,RouterLink} from '@angular/router';
import { UsersComponent } from '../users/users.component';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-angular-project';
}
