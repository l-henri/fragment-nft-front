import React from 'react';
import './index.less';
import { Row, Col, Typography } from 'antd';
// import { ColumnText } from './ColumnText';
// import { ColumnImage } from './ColumnImage';

const { Title, Paragraph } = Typography;

interface RowInterface {
  title: string;
  imageSource: string;
  content: string;
  reverse?: boolean;
  isLastItem?: boolean;
}

export const RowSwitch: React.FC<RowInterface> = ({
  title,
  imageSource,
  content,
  reverse,
  isLastItem,
}: RowInterface) => {
  return (
    <Row className="row-switch" justify="center">
      <Col
        className={reverse ? 'col-text-left' : 'col-text-right'}
        span={12}
        order={reverse ? 2 : 1}
      >
        <Title level={3}>{title}</Title>
        <Paragraph className="paragraph">{content}</Paragraph>
      </Col>
      <Col
        className={isLastItem ? 'col-img-last-item' : 'col-img'}
        span={12}
        order={reverse ? 1 : 2}
      >
        <img src={imageSource} alt="grill" />
      </Col>
    </Row>
  );
};

RowSwitch.defaultProps = {
  reverse: false,
  isLastItem: false,
};
