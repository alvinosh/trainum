export interface ApiResponse<T> {
  body: T;
  status: number;
  statusText?: string;
  url?: string;
}
