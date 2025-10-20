export interface IMeta {
  page?: number;
  totalPage?: number;
  currentPage?: number;
  total?: number;
}
export interface IResponse<T> {
  success: boolean;
  message: string;
  statusCode: number;
  data: T;
  meta?: IMeta;
}
