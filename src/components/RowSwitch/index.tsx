import React from 'react';
import clsx from 'clsx';
import './index.less';
import { Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface RowInterface {
  title: string;
  imageSource: string;
  content: string;
  reverse: boolean;
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
    <>
      <Row
        className="row-switch"
        justify="center"
        gutter={[
          { xs: 24, sm: 24, md: 24 },
          { xs: 8, sm: 8, md: 16, lg: 16 },
        ]}
      >
        <Col
          className={reverse ? 'col-text-left' : 'col-text-right'}
          order={reverse ? 2 : 1}
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          xxl={12}
        >
          <Title level={3}>{title}</Title>
          <Paragraph className="paragraph">{content}</Paragraph>
        </Col>
        <Col
          className={clsx({ 'col-img': true, 'col-img-last-item': isLastItem })}
          order={reverse ? 1 : 2}
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          xxl={12}
        >
          <img src={imageSource} alt="grill" />
        </Col>
      </Row>
    </>
  );
};

RowSwitch.defaultProps = {
  isLastItem: false,
};
