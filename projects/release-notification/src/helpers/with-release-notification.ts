import {
  ERROR_HANDLERS,
  ErrorHandlersFeature,
  ErrorHandlersFeatureKind,
  makeErrorHandlersFeature,
} from "ng-error-handlers";
import { releaseNotificationHandler } from "./release-notification-handler";

export function withReleaseNotification(): ErrorHandlersFeature<ErrorHandlersFeatureKind.FuncHandlers> {
  return makeErrorHandlersFeature(ErrorHandlersFeatureKind.FuncHandlers, [
    {
      provide: ERROR_HANDLERS,
      useFactory: () => releaseNotificationHandler(),
      multi: true,
    },
  ]);
}
