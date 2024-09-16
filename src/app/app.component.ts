import { Component } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { ReleaseNotificationModalComponent } from "../../projects/release-notification";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, RouterLink, ReleaseNotificationModalComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  throwError() {
    throw new Error(
      "TypeError: Failed to fetch dynamically imported module: https://example.com/chunk-4XF37HCG.js",
    );
  }

  reload() {
    location.reload();
  }
}
