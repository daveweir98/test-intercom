import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Intercom from '@intercom/messenger-js-sdk';

Intercom({
  app_id: 'fkntfuu4',
  user_id: "1", // IMPORTANT: Replace "user.id" with the variable you use to capture the user's ID
  name: "Dave", // IMPORTANT: Replace "user.name" with the variable you use to capture the user's name
  email: "david.weir@intercom.io", // IMPORTANT: Replace "user.email" with the variable you use to capture the user's email
  created_at: Math.floor(Date.now() / 1000), // IMPORTANT: Replace "user.createdAt" with the variable you use to capture the user's sign-up date in a Unix timestamp (in seconds) e.g. 1704067200
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TestAPp';
}
