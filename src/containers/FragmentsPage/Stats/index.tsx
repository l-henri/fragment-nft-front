import React from 'react';
import './index.less';
import { Row, Col, Card, Typography } from 'antd';
import { statsData } from './data';

const { Title } = Typography;

export const Stats: React.FC = () => {
  return (
    <>
      <Title level={2}>Some Cool Stats</Title>
      <div className="container-stats">
        {Object.values(statsData).map(({ rowId, data }) => (
          <Row key={rowId} justify="space-between" gutter={[24, 24]}>
            {data.map(({ id, title, description }) => (
              <Col key={id} className="card" span={6}>
                <Card title={<Title level={3}>{title}</Title>} bordered={false}>
                  <p>{description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </>
  );
};
