export class ApiError extends Error {
  name = 'ApiError';

  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}
