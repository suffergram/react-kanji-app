import { FormEventHandler, ReactNode } from 'react';
import { ErrorMessage, Form, SuccessMessage } from '../../shared/form/style';
import { SaveStatus } from '../../../types/save-status';
import {
  Card,
  CardButton,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './style';

type SettingsCardProps = {
  title: string;
  description?: string;
  status: SaveStatus;
  canSubmit: boolean;
  error: string | null;
  successText: string;
  onSubmit: FormEventHandler;
  children: ReactNode;
};

export function SettingsCard({
  title,
  description,
  status,
  canSubmit,
  error,
  successText,
  onSubmit,
  children,
}: SettingsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>

      <Form onSubmit={onSubmit}>
        {children}
        {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
        {status === 'saved' && (
          <SuccessMessage role="status">{successText}</SuccessMessage>
        )}

        <CardFooter>
          <CardButton
            type="submit"
            variant="primary"
            value={status === 'saving' ? 'Saving…' : 'Save'}
            disabled={!canSubmit || status === 'saving'}
          />
        </CardFooter>
      </Form>
    </Card>
  );
}
