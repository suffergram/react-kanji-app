import { ApiError } from './api-error';

const getErrorMessage = (statusCode: number) => {
  switch (statusCode) {
    case 400:
      return 'Bad request';
    case 404:
      return 'Not found';
    case 500:
      return 'Internal Server Error';
    case 503:
      return 'Service unavailable';
    default:
      return `Request failed with status ${statusCode}`;
  }
};

export const processResponse = async <T>(response: Response): Promise<T> => {
  if (response.ok) {
    if (response.status === 204) {
      return undefined as T;
    }
    return response.json();
  }

  let message = getErrorMessage(response.status);

  try {
    const body = await response.json();
    if (body.error) {
      message = body.error;
    }
  } catch (error) {
    // body is not JSON, keep fallback message
  }

  throw new ApiError(response.status, message);
};
