import { Fragment } from 'react';
import { SectionItemType } from '../../types/section-item-type';
import { SectionItem } from '../section-item/section-item';
import { Header, Line, Section, SectionContainer } from './style';

type QuizResultSectionProps = {
  area: string;
  title: string;
  array: SectionItemType[] | string;
};

export function QuizResultSection({
  area,
  title,
  array,
}: QuizResultSectionProps) {
  return (
    <Section $area={area}>
      <Header>{title}</Header>
      <SectionContainer>
        {Array.isArray(array) ? (
          array.map((item, index) => (
            <Fragment key={index}>
              <SectionItem
                primary={item.primary}
                kana={item.kana}
                meaning={item.meaning}
              />
              {index < array.length - 1 && <Line />}
            </Fragment>
          ))
        ) : (
          <SectionItem kana={array} />
        )}
      </SectionContainer>
    </Section>
  );
}
