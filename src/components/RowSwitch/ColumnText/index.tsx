import React from 'react';
import './index.less';
import { Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface ColumnTextInterface {
  title: string;
  content: string;
  reverse?: boolean;
}

export const ColumnText: React.FC<ColumnTextInterface> = ({
  title,
  content,
  reverse,
}: ColumnTextInterface) => {
  return (
    <Col className={reverse ? 'col-text-left' : 'col-text-right'} span={12}>
      <Title level={3}>{title}</Title>
      <Paragraph className="paragraph">{content}</Paragraph>
    </Col>
  );
};

ColumnText.defaultProps = {
  reverse: false,
};
