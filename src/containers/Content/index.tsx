import React from 'react';
import { Layout, Typography } from 'antd';
import Grid from '@assets/main-grill.svg';
import './index.less';

const { Content: AntContent } = Layout;
const { Title, Text, Paragraph } = Typography;

export const Content: React.FC = () => {
  return (
    <AntContent>
      <div className="content">
        <div className="welcome-container">
          <Title className="welcome-title">Welcome</Title>
          <Paragraph className="welcome-text">
            If you have been at ETHCC 2019
            <br />
            or you simply enjoy the event?
          </Paragraph>
          <Text className="welcome-text">Claim your token now!</Text>
        </div>
        <img className="img-grid" src={Grid} alt="Grid" />
      </div>
    </AntContent>
  );
};
