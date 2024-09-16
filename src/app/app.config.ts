import {
  ApplicationConfig,
  ErrorHandler,
  provideZoneChangeDetection,
} from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideErrorHandlers, withClassHandlers } from "ng-error-handlers";
import { withReleaseNotification } from "../../projects/release-notification";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideErrorHandlers(
      withReleaseNotification(),
      withClassHandlers(ErrorHandler),
    ),
  ],
};
