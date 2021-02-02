import React from 'react';
import './index.less';
import { Grid, Row, Col, Typography } from 'antd';
import { ContentWrapper, RowSwitch, Avatar } from '@components';
import { contentData } from './content-data';
import { avatarData } from './avatar-data';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export const Content: React.FC = () => {
  const { xs, lg } = useBreakpoint();

  return (
    <ContentWrapper>
      <Title level={xs ? 2 : 1}>The Project</Title>
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

      {contentData.map(({ id, title, imageSource, content }, index) => {
        const reverse = lg === true && id % 2 === 1;
        const isLastItem = index === contentData.length - 1;
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

      <Title className="about-us" level={xs ? 2 : 1}>
        About Us
      </Title>
      <Row justify="center" align="middle">
        {avatarData.map(({ id, name, text, imageSource }) => (
          <Col key={id} className="avatar" span={8}>
            <Avatar id={id} name={name} text={text} imageSource={imageSource} />
          </Col>
        ))}
      </Row>
    </ContentWrapper>
  );
};
