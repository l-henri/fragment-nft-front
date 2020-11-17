import React from 'react';
import { Row } from 'antd';
import { ColumnText } from './ColumnText';
import { ColumnImage } from './ColumnImage';

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
    <Row justify="center" style={{ maxHeight: '450px' }}>
      {reverse ? (
        <>
          <ColumnImage imageSource={imageSource} isLastItem={isLastItem} />
          <ColumnText title={title} content={content} reverse />
        </>
      ) : (
        <>
          <ColumnText title={title} content={content} />
          <ColumnImage imageSource={imageSource} isLastItem={isLastItem} />
        </>
      )}
    </Row>
  );
};

RowSwitch.defaultProps = {
  reverse: false,
  isLastItem: false,
};
