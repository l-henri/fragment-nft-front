import React from 'react';
import './App.less';
import { Layout } from 'antd';
import { TopBar } from './TopBar';
import { Header } from './Header';

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <TopBar />
      <Header />
    </Layout>
  );
};

export default App;
