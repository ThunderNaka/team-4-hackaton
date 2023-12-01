export interface ServiceResponse<T> {
  data: T;
  status: number;
  success: boolean;
}
