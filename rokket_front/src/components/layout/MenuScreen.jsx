import React, {useState} from 'react'
import { Layout, Menu,Breadcrumb } from 'antd';
import {
  BarsOutlined ,
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import '../../styles/MenuScreen.css'
import { ArticlesScreen } from '../articles/ArticlesScreen';
import { AddArticle } from '../articles/AddArticle';

const { Header, Content, Footer, Sider } = Layout;

export const MenuScreen = () => {
  
  const [collapsed, setCollapsed] = useState(false);
 
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<BarsOutlined />}>
            Articles
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}> 
          <AddArticle/>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Michel</Breadcrumb.Item>
            </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <ArticlesScreen/>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>2020 | Prueba Tecnica 2.0 | Michel Araya</Footer>
      </Layout>
    </Layout>
  );
}