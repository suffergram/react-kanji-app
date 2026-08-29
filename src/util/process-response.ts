export const processResponse = async <T>(
  response: Response
): Promise<T> => {
  if (!response.ok) {
    let errorMessage: string;

    switch (response.status) {
      case 400:
        errorMessage = 'Invalid search query';
        break;
      case 404:
        errorMessage = 'Search data not found';
        break;
      case 500:
        errorMessage = 'Server error, please try again later';
        break;
      case 503:
        errorMessage = 'Service temporarily unavailable';
        break;
      default:
        errorMessage = `Request failed with status ${response.status}`;
    }

    return Promise.reject(new Error(errorMessage));
  }

  return response.json();
};
