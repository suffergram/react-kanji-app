import { useNavigate } from 'react-router-dom';
import { ErrorCode } from './style';

export function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <>
      <ErrorCode>404</ErrorCode>
      <p>Not Found</p>
      <button type="button" onClick={handleClick}>
        Go back
      </button>
    </>
  );
}
