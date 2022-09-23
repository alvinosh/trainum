import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class Constants {
  public readonly prod = true;

  public readonly API_ENDPOINT = this.prod
    ? 'http://192.168.1.155:3333/api'
    : 'http://localhost:3333/api';
}
