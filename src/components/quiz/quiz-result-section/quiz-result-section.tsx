import { Fragment } from 'react';
import { SectionItemType } from '../../../types/section-item-type';
import { SectionItem } from '../section-item/section-item';
import { Header, Section, SectionContainer } from './style';
import { Line } from '../../shared/line/line';

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
