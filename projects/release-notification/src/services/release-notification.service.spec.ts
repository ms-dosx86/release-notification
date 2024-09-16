import { createServiceFactory, SpectatorService } from "@ngneat/spectator";
import { ReleaseNotificationService } from "./release-notification.service";
import { Notification } from "../models/notification";

describe("ReleaseNotificationService", () => {
  let spectator: SpectatorService<ReleaseNotificationService>;
  const createService = createServiceFactory(ReleaseNotificationService);

  beforeEach(() => {
    spectator = createService();
  });

  it("should create", () => {
    expect(spectator.service).toBeTruthy();
  });

  it("should have INIT notification by default", () => {
    expect(spectator.service.notification()).toBe(Notification.INIT);
  });

  it("should emit NOTIFY notification", () => {
    spectator.service.notify();

    expect(spectator.service.notification()).toBe(Notification.NOTIFY);
  });
});
