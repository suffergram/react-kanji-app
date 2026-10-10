import { FormEventHandler, ReactNode } from 'react';
import { ErrorMessage, Form, SuccessMessage } from '../../shared/form/style';
import { SaveStatus } from '../../../types/save-status';
import { Card, CardTitle, SaveButton } from './style';

type SettingsCardProps = {
  title: string;
  status: SaveStatus;
  isChanged: boolean;
  error: string | null;
  successText: string;
  handleSubmit: FormEventHandler;
  children: ReactNode;
};

export function SettingsCard({
  title,
  status,
  isChanged,
  error,
  successText,
  handleSubmit,
  children,
}: SettingsCardProps) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>

      <Form onSubmit={handleSubmit}>
        {children}
        {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
        {status === 'saved' && (
          <SuccessMessage role="status">{successText}</SuccessMessage>
        )}

        <SaveButton
          type="submit"
          variant="primary"
          value={status === 'saving' ? 'Saving…' : 'Save'}
          disabled={!isChanged || status === 'saving'}
        />
      </Form>
    </Card>
  );
}
