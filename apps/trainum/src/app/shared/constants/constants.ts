import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Constants {
  public readonly API_ENDPOINT: string = 'http://192.168.1.146:3333/api';
  public readonly API_MOCK_ENDPOINT: string = 'mock-domain/api';
}
