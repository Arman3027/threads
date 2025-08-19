export interface PaginationType {
  totalData: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface DataPaginationType<T> {
  data: T;
  pagination: PaginationType;
}

export interface PaginationOptionsType<T> {
  data: T[];
  limit?: number;
  page?: number;
  totalData: number;
}

export interface ResponseBodyType<T> {
  data?: T;
  pagination?: PaginationType;
  message?: string;
}

export interface CustomResponseType<T> {
  ok: boolean;
  statusCode?: number;
  body: ResponseBodyType<T>;
}

export interface CustomResponseOptionsType<T>
  extends Omit<CustomResponseType<T>, "ok"> {
  statusCode?: number;
}
