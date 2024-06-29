import { Link, SetURLSearchParams } from 'react-router-dom';
import {
  InstructionContainer,
  InstructionExampleUl,
  InstructionMessage,
} from './style';
import {
  AnchorHTMLAttributes,
  Dispatch,
  MouseEvent,
  MouseEventHandler,
  SetStateAction,
  useCallback,
} from 'react';

type DictInstructionProps = {
  setSearch: (param: string) => void;
};

export function DictInstruction({ setSearch }: DictInstructionProps) {
  const setExampleSearch = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = event.target as HTMLAnchorElement;
    setSearch(target.text);
  };

  return (
    <InstructionContainer>
      <InstructionMessage>
        You can easily find words and kanji on this page.
      </InstructionMessage>
      <InstructionMessage>
        Enter any Japanese or English text in the search box and get results
        including words and kanji.
      </InstructionMessage>
      <InstructionMessage>Here's a few example searches.</InstructionMessage>
      <InstructionExampleUl>
        <li>
          English:{' '}
          <a
            // href="/dict?search=car"
            onClick={setExampleSearch}
            style={{
              color: 'lightblue',
            }}
          >
            car
          </a>
        </li>
        <li>Japanese: </li>
        <li>Kanji: </li>
        <li>Kana: </li>
        <li>Romaji: </li>
      </InstructionExampleUl>
    </InstructionContainer>
  );
}
