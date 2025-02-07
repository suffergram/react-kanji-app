import { Link, SetURLSearchParams } from 'react-router-dom';
import {
  ExampleAnchor,
  InstructionContainer,
  InstructionExampleUl,
  InstructionMessage,
} from './style';
import {
  AnchorHTMLAttributes,
  Dispatch,
  Fragment,
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

  const examples = {
    english: ['car', 'room', 'color'],
    japanese: ['可愛い', '生き物', '行く'],
    kanji: ['車', '全', '危'],
    kana: ['くすり', 'かい', 'ダイ'],
    romaji: ['otoko', 'basho', 'megane'],
  };

  const instructions = [
    'You can easily find words and kanji on this page.',
    'Enter any Japanese or English text in the search box and get results including words and kanji.',
    "Here's a few example searches:",
  ];

  return (
    <InstructionContainer>
      {instructions.map((message, index) => (
        <InstructionMessage key={index}>{message}</InstructionMessage>
      ))}
      <InstructionExampleUl>
        {Object.entries(examples).map(([title, values]) => (
          <li key={title}>
            {title[0].toUpperCase() + title.slice(1).toLowerCase()}:{' '}
            {values.map((value, index) => (
              <Fragment key={index}>
                <ExampleAnchor onClick={setExampleSearch}>
                  {value}
                </ExampleAnchor>
                {index !== values.length - 1 && ', '}
              </Fragment>
            ))}
          </li>
        ))}
      </InstructionExampleUl>
    </InstructionContainer>
  );
}
