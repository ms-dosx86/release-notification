import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from "@angular/core";
import { ReleaseNotificationService } from "../../services/release-notification.service";
import { Notification } from "../../models/notification";

@Component({
  selector: "release-notification-modal",
  standalone: true,
  templateUrl: "./release-notification-modal.component.html",
  styleUrl: "./release-notification-modal.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReleaseNotificationModalComponent {
  private readonly releaseNotificationService = inject(
    ReleaseNotificationService,
  );

  readonly showNotification = signal(false);

  constructor() {
    effect(
      () => {
        const notification = this.releaseNotificationService.notification();

        if (notification === Notification.NOTIFY) {
          this.showNotification.set(true);
        }
      },
      {
        allowSignalWrites: true,
      },
    );
  }
}
