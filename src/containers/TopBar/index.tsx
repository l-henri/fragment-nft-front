import React, { useState } from 'react';
import './index.less';
import { Layout, Tooltip, Space, Typography } from 'antd';
import { ButtonText } from '@components/ButtonText';
import MoonIcon from '@assets/moon.svg';
import SunIcon from '@assets/little-sun-black.svg';
import AccountIcon from '@assets/account.svg';
import { ellipse } from '@utils';

const { Header } = Layout;
const { Text } = Typography;

export const TopBar: React.FC = () => {
  const [dark, toggleDark] = useState<boolean>(false);

  const toggleTheme = () => {
    toggleDark(!dark);
  };

  const address = '0x7377405B8110b4C3B51AcC5743a802784c3c3FDf';
  const addressEllipsed = ellipse(address);

  return (
    <Header className="top-bar">
      <ButtonText className="title">ETHCC Memorabilia 2019</ButtonText>
      <ButtonText className="btn">Home</ButtonText>
      <ButtonText className="btn">Fragments</ButtonText>
      <Space className="right-items" size="large">
        <ButtonText size="small" onClick={toggleTheme}>
          {dark ? <img src={SunIcon} alt="light icon" /> : <img src={MoonIcon} alt="dark icon" />}
        </ButtonText>
        <Tooltip title={address} placement="bottom">
          <img src={AccountIcon} alt="account" />
          <Text className="account-text">{addressEllipsed}</Text>
        </Tooltip>
      </Space>
    </Header>
  );
};
