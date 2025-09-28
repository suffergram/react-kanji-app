import { useNavigate } from 'react-router-dom';
import { ErrorCode } from './style';
import { Button } from '../../components/shared/button/button';

export function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <>
      <ErrorCode>404</ErrorCode>
      <p>Not Found</p>
      <Button value="Go back" variant="secondary" onClick={handleClick} />
    </>
  );
}
