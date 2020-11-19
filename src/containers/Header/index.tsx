import React from 'react';
import { Layout, Grid, Typography } from 'antd';
import GridImage from '@assets/main-grill.svg';
import './index.less';

const { Content } = Layout;
const { Title, Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

export const Header: React.FC = () => {
  const { lg } = useBreakpoint();

  return (
    <Content className="header">
      <div className="welcome-container">
        <Title level={lg ? 1 : 2}>Welcome</Title>
        <Paragraph className="welcome-text">
          If you have been at ETHCC 2019
          <br />
          or you simply enjoy the event?
        </Paragraph>
        <Text className="welcome-text">Claim your token now!</Text>
        <img className="img-grid" src={GridImage} alt="Grid" />
      </div>
    </Content>
  );
};
