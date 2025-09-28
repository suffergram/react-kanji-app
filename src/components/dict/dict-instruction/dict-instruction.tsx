import { Fragment, MouseEventHandler } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ExampleAnchor,
  InstructionContainer,
  InstructionExampleUl,
  InstructionMessage,
} from './style';

export function DictInstruction() {
  const location = useLocation();
  const navigate = useNavigate();

  const setExampleSearch: MouseEventHandler = (event) => {
    const target = event.target as HTMLAnchorElement;
    navigate(`${location.pathname}?search=${target.text}`);
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
