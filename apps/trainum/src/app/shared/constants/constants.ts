import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
  public readonly API_ENDPOINT: string = 'http://localhost:3333';
  public readonly API_MOCK_ENDPOINT: string = 'mock-domain/api';
}
