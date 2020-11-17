import React from 'react';
import { Layout, Typography } from 'antd';
import Grid from '@assets/main-grill.svg';
import './index.less';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;

export const Header: React.FC = () => {
  return (
    <Content className="header">
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
    </Content>
  );
};
