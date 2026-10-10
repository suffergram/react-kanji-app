import { FormEventHandler, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, FormControlLabel } from '@mui/material';
import { UserServices } from '../../../services/services';
import { ApiError } from '../../../util/api-error';
import { TextInput } from '../../shared/text-input/text-input';
import { handleSetGuestAction } from '../../../state/auth-action-creators';
import { ErrorMessage, Field, FieldLabel, Form } from '../../shared/form/style';
import {
  Card,
  CardButton,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../settings-card/style';
import { confirmCheckboxSx, confirmLabelSx, Warning } from './style';

export function DeleteSection() {
  const dispatch = useDispatch();

  const [password, setPassword] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleSubmit: FormEventHandler = async (event) => {
    event.preventDefault();
    setError(null);
    setIsDeleting(true);

    try {
      await UserServices.deleteAccount(password);
      dispatch(handleSetGuestAction());
    } catch (err: unknown) {
      setError(
        err instanceof ApiError
          ? err.message
          : 'Could not reach the server, please try again'
      );
      setIsDeleting(false);
    }
  };

  const canDelete = isConfirmed && Boolean(password);

  return (
    <Card $danger>
      <CardHeader>
        <CardTitle $danger>Delete account</CardTitle>
        <CardDescription>
          Permanently remove your account and all of its data
        </CardDescription>
      </CardHeader>

      <Warning>
        This action <b>cannot be undone</b>. Your profile, settings and learning
        progress will be deleted forever.
      </Warning>

      <Form onSubmit={handleSubmit}>
        <Field>
          <FieldLabel>Current password</FieldLabel>
          <TextInput
            fullWidth
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            inputProps={{ maxLength: 72 }}
            type="password"
            autoComplete="current-password"
          />
        </Field>

        <FormControlLabel
          sx={confirmLabelSx}
          control={
            <Checkbox
              checked={isConfirmed}
              onChange={(event) => setIsConfirmed(event.target.checked)}
              sx={confirmCheckboxSx}
            />
          }
          label="I understand this cannot be undone"
        />

        {error && <ErrorMessage role="alert">{error}</ErrorMessage>}

        <CardFooter>
          <CardButton
            type="submit"
            variant="danger"
            value="Delete account"
            disabled={!canDelete || isDeleting}
          />
        </CardFooter>
      </Form>
    </Card>
  );
}
