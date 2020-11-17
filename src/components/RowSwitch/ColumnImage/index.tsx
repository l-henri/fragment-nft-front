import React from 'react';
import './index.less';
import { Col } from 'antd';

interface ColumnImageInterface {
  imageSource: string;
  isLastItem?: boolean;
}

export const ColumnImage: React.FC<ColumnImageInterface> = ({
  imageSource,
  isLastItem,
}: ColumnImageInterface) => {
  return (
    <Col className={isLastItem ? 'col-img-last-item' : 'col-img'} span={12}>
      <img src={imageSource} alt="grill" />
    </Col>
  );
};

ColumnImage.defaultProps = {
  isLastItem: false,
};
