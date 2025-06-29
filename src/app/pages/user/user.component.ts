import { Component } from "@angular/core";
import { GamesComponent } from "../games/games.component";

@Component({
  selector: "app-user",
  imports: [GamesComponent],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.css",
})
export class UserComponent {
  username: string = "JohnDoe";
  isLoggedIn: boolean = false; //funciona como estado
  favGame: string = "";

  getFavoriteGame(gameName: string) {
    this.favGame = gameName;
  }

  greet() {
    alert(`Hello`);
  }
}
