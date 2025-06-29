import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-games",
  imports: [CommonModule],
  templateUrl: "./games.component.html",
  styleUrl: "./games.component.css",
})
export class GamesComponent {
  @Input() username: string = ""; // Input property to receive username from parent component
  @Output() addFavoriteEvent = new EventEmitter<string>(); // Output event to notify parent component

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    { id: 1, name: "Game One", genre: "Action" },
    { id: 2, name: "Game Two", genre: "Adventure" },
    { id: 3, name: "Game Three", genre: "Puzzle" },
    { id: 4, name: "Game Four", genre: "RPG" },
    { id: 5, name: "Game Five", genre: "Strategy" },
    { id: 6, name: "Game Six", genre: "Simulation" },
    { id: 7, name: "Game Seven", genre: "Sports" },
    { id: 8, name: "Game Eight", genre: "Racing" },
    { id: 9, name: "Game Nine", genre: "Horror" },
    { id: 10, name: "Game Ten", genre: "Platformer" },
  ];
}
