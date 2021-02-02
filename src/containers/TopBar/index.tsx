import React, { useState } from 'react';
import './index.less';
import { Layout, Tooltip, Space, Typography, Grid, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { ButtonLink } from '@components';
import MoonIcon from '@assets/moon.svg';
import SunIcon from '@assets/little-sun-black.svg';
import AccountIcon from '@assets/account.svg';
import { ellipse } from '@utils';

const { Header } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;

export const TopBar: React.FC = () => {
  const [dark, toggleDark] = useState<boolean>(false);
  const { lg } = useBreakpoint();

  const toggleTheme = () => {
    toggleDark(!dark);
  };

  const address = '0x7377405B8110b4C3B51AcC5743a802784c3c3FDf';
  const addressEllipsed = ellipse(address);

  return (
    <Header className="top-bar">
      {!lg && <MenuOutlined />}
      <ButtonLink className="title" to="/">
        ETHCC Memorabilia 2019
      </ButtonLink>
      {lg && (
        <>
          <ButtonLink className="btn" to="/">
            Home
          </ButtonLink>
          <ButtonLink className="btn" to="/fragments">
            Fragments
          </ButtonLink>
          <Space className="right-items" size="large">
            <Button
              size="small"
              type="text"
              onClick={toggleTheme}
              icon={<img src={dark ? SunIcon : MoonIcon} alt={dark ? 'light-icon' : 'dark-icon'} />}
            />
            <Tooltip title={address} placement="bottomLeft">
              <img src={AccountIcon} alt="account" />
              <Text className="account-text">{addressEllipsed}</Text>
            </Tooltip>
          </Space>
        </>
      )}
    </Header>
  );
};
