import { Injectable, signal } from "@angular/core";
import { Notification } from "../models/notification";

@Injectable({
  providedIn: "root",
})
export class ReleaseNotificationService {
  private readonly notificationTrigger = signal(Notification.INIT);
  readonly notification = this.notificationTrigger.asReadonly();

  notify() {
    this.notificationTrigger.set(Notification.NOTIFY);
  }
}
