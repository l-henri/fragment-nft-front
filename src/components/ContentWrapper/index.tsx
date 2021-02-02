import React from 'react';
import './index.less';
import { Layout } from 'antd';

const { Content } = Layout;

interface Wrapper {
  children: React.ReactNode;
}

export const ContentWrapper: React.FC<Wrapper> = ({ children }: Wrapper) => {
  return <Content className="antd-content">{children}</Content>;
};
