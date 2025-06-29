import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { UserComponent } from "./pages/user/user.component";
import { GamesComponent } from "./pages/games/games.component";
import { CommentsComponent } from "./pages/comments/comments.component";

@Component({
  selector: "app-root",
  imports: [CommonModule, CommentsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  country = "USA";
}
