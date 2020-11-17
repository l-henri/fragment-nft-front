import React from 'react';
import './App.less';
import { Layout } from 'antd';
import { TopBar } from './TopBar';
import { Header } from './Header';
import { Content } from './Content';

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <TopBar />
      <Header />
      <Content />
    </Layout>
  );
};

export default App;
