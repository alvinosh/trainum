import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { ErrorService } from '../services/error.service';
import { LoggingService } from '../services/logging.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private errorService: ErrorService,
    private logger: LoggingService
  ) {}

  handleError(error: Error | HttpErrorResponse): void {
    let message;
    // eslint-disable-next-line prefer-const
    let stackTrace = 'NONE';
    if (error instanceof HttpErrorResponse) {
      // Server error
      message = this.errorService.getServerErrorMessage(error);
      //stackTrace = errorService.getServerErrorStackTrace(error);
      // notifier.showError(message);
    } else {
      // Client Error
      message = this.errorService.getClientErrorMessage(error);
      // notifier.showError(message);
    }
    // Always log errors
    this.logger.logError(message, stackTrace);
  }
}
