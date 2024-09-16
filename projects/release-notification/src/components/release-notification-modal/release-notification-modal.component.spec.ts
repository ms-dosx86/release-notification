import { createHostFactory, SpectatorHost } from "@ngneat/spectator";
import { ReleaseNotificationModalComponent } from "./release-notification-modal.component";
import { ReleaseNotificationService } from "../../services/release-notification.service";

describe("ReleaseNotificationComponent", () => {
  let spectator: SpectatorHost<ReleaseNotificationModalComponent>;
  let releaseNotificationService: ReleaseNotificationService;
  const createHost = createHostFactory(ReleaseNotificationModalComponent);

  beforeEach(() => {
    spectator = createHost(`
      <release-notification-modal>
        <div class="modal-content">Custom content works</div>
      </release-notification-modal>`);
    releaseNotificationService = spectator.inject(ReleaseNotificationService);
  });

  it("should create", () => {
    expect(spectator.component).toBeTruthy();
  });

  it("should be hidden by default", () => {
    expect(findReleaseNotificationEl()).toBeNull();
  });

  it("should get displayed once notification service emitted a notification", () => {
    expect(findReleaseNotificationEl()).toBeNull();
    releaseNotificationService.notify();
    spectator.detectChanges();
    expect(findReleaseNotificationEl()).not.toBeNull();
  });

  it("should not display content until the modal gets displayed", () => {
    expect(findContentEl()).toBeNull();
    releaseNotificationService.notify();
    spectator.detectChanges();
    expect(findContentEl()).not.toBeNull();
  });

  function findReleaseNotificationEl() {
    return spectator.query(".release-notification-modal");
  }

  function findContentEl() {
    return spectator.queryHost(".modal-content");
  }
});
