import React from 'react';
import './App.less';
import { Layout } from 'antd';
import { Header } from './Header';
import { Content } from './Content';

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content />
    </Layout>
  );
};

export default App;
