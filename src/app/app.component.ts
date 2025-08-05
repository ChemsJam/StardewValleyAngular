import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GameComponent } from './components/game/game.component';
import { HeaderActionsComponent } from "./components/header-actions/header-actions.component";
import { NintendoFooterComponent } from "./nintendo-footer/nintendo-footer.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    GameComponent
    // ...otros componentes
    ,
    NintendoFooterComponent
]
})
export class AppComponent {
  title = 'angular-vr-course';
}
