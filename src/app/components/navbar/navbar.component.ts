import { Component } from '@angular/core';
import { HeaderActionsComponent } from '../header-actions/header-actions.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    HeaderActionsComponent,
    // ...otros módulos...
  ],
  standalone: true
})
export class NavbarComponent {}
