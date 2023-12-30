import { Loader, LoaderContainer, LoaderContent } from './style';

type CardLoaderProps = {
  isOptionPressed: boolean;
};

export function CardLoader({ isOptionPressed }: CardLoaderProps) {
  return (
    <LoaderContainer>
      <LoaderContent>{isOptionPressed && <Loader />}</LoaderContent>
    </LoaderContainer>
  );
}
