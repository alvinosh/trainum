import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QueryStringParameters } from '../classes/query-string-params';
import { UrlBuilder } from '../classes/url-builder';
import { Constants } from '../constants/constants';

import { ApiResponse } from '@trainum/models/types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    // Angular Modules
    private http: HttpClient,
    private constants: Constants
  ) {}

  public get<T>(url: string, options?: any) {
    return this.http.get<T>(url, options);
  }
  public post<T>(url: string, data: any, options?: any) {
    return this.http.post<T>(url, data, options);
  }
  public put<T>(url: string, data: any, options?: any) {
    return this.http.put<T>(url, data, options);
  }
  public delete<T>(url: string, options?: any) {
    return this.http.delete<T>(url, options);
  }

  public createUrl(action: string, isMockAPI: boolean = false): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI
        ? this.constants.API_MOCK_ENDPOINT
        : this.constants.API_ENDPOINT,
      action
    );
    return urlBuilder.toString();
  }
  public createUrlWithQueryParameters(
    action: string,
    queryStringHandler?: (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      action
    );
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }
  public createUrlWithPathVariables(
    action: string,
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl += `/${encodeURIComponent(
          pathVariable.toString()
        )}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }
}
