import React from 'react';
import './index.less';
import { Layout, Typography } from 'antd';
import { RowSwitch } from '@components/RowSwitch';
import GrillImage from '@assets/little-grill.svg';
import OptimisationImage from '@assets/optimisation.svg';
import ItinerantImage from '@assets/itinerant.svg';
import SunImage from '@assets/sun.svg';

const { Content: AntContent } = Layout;
const { Title, Paragraph } = Typography;

interface Data {
  id: number;
  title: string;
  imageSource: string;
  content: string;
}

const data: Array<Data> = [
  {
    id: 0,
    title: 'Finding Path',
    imageSource: GrillImage,
    content: `
        The finding path The first step is the finding path. The original image is converted to
        black and white and is then transformed into a list of points that the path must visit.
        Looking at the picture, the darker parts or fragments simply mean that there are more points
        to visit.
  `,
  },
  {
    id: 1,
    title: 'Optimisation',
    imageSource: OptimisationImage,
    content: `To optimise this project, the path needs to visit all the points. Then, the question of solving what is called “the travelling salesman problem” or TSP comes in. Imagine a salesman who wants to visit a group of 20 cities. How to find the ideal route, which will allow him to spend as little time as possible on the road?`,
  },
  {
    id: 2,
    title: 'Itinerant Traveler',
    imageSource: ItinerantImage,
    content: `The description of this problem can be identified as early as the 19th century, and was first formulated in mathematical terms in the 1960s. During the 1970s, 80s and 90s, many brilliant scientists have worked on the subject. Indeed, this is a general optimization problem, which appears very regularly in the design of complex systems.`,
  },
  {
    id: 3,
    title: 'Real and daily live applications',
    imageSource: SunImage,
    content: `Nowadays, TSP solving algorithms are still a thriving area of mathematical research. They are present in most of the information systems on which you depend on a daily basis. These algorithms allows your power grid to deliver electricity, Waze to transport you to Paris, Airbus to build its planes and there are so many more examples.`,
  },
];

export const Content: React.FC = () => {
  return (
    <AntContent className="content">
      <Title>The Project</Title>
      <Paragraph className="content-text">
        Our project consists in tokenizing a picture that was taken during the ETHCC2019 event in
        Paris and make it available to anyone that access to this data.
      </Paragraph>
      <Paragraph className="content-text">
        This tokenizing process divided the picture into several fragments where each of these are
        physical representations of a mathematical artifact that is ubiquitous in our daily lives,
        without us realizing it.
      </Paragraph>
      <Title className="content-title" level={2}>
        How does it work?
      </Title>
      {data.map(({ id, title, imageSource, content }, index) => {
        const reverse = id % 2 === 1;
        const isLastItem = index === data.length - 1;
        return (
          <RowSwitch
            key={id}
            title={title}
            imageSource={imageSource}
            content={content}
            reverse={reverse}
            isLastItem={isLastItem}
          />
        );
      })}
    </AntContent>
  );
};
