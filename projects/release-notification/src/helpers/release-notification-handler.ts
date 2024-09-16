import { inject } from "@angular/core";
import { dynamicImportHandler } from "ng-error-handlers/dynamic-import-handler";
import { ReleaseNotificationService } from "../services/release-notification.service";

export function releaseNotificationHandler() {
  const releaseNotificationService = inject(ReleaseNotificationService);

  return dynamicImportHandler(() => releaseNotificationService.notify());
}
