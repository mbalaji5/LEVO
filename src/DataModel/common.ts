interface IError {
  message: string;
  code: string;
}

export interface IResponse<T> {
  data: [T];
  error: IError;
}
