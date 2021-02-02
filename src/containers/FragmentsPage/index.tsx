import React from 'react';
import './index.less';
import { Row, Col, Typography } from 'antd';
import { ContentWrapper, Divider } from '@components';
import LightImg from '@assets/light.svg';
import { Stats } from './Stats';
import { information, footer } from './data';

const { Title, Paragraph } = Typography;

export const FragmentsPage: React.FC = () => {
  return (
    <ContentWrapper>
      <div className="container-fragments">
        <Title level={2}>For Your Information</Title>
        <Row justify="space-between">
          <Col className="col-information" span={16}>
            {information.map(({ id, text }) => (
              <Paragraph key={id} className="text-information">
                {text}
              </Paragraph>
            ))}
          </Col>
          <Col span={6}>
            <img src={LightImg} alt="light-img" />
          </Col>
        </Row>
        {/* Stats */}
        <Stats />
        <Divider />
        <div className="footer">
          {footer.map(({ id, text, strong }) => (
            <Paragraph key={id} className="footer-text" strong={strong}>
              {text}
            </Paragraph>
          ))}
        </div>
      </div>
    </ContentWrapper>
  );
};
