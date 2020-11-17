import React from 'react';
import './App.less';
import { Layout } from 'antd';
import { Header } from '@components/Header';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: '20px 50px' }}>
        <div className="site-layout-content">Content</div>
      </Content>
    </Layout>
  );
};

export default App;
