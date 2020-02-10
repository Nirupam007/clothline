import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Header from './Components/Header';
import Stats from './Components/Stats';
import SideBar from './Components/SideBar';
import TabContent from './Components/TabContent';
import settings from './Settings';
class App extends React.Component {
  render() {
    const { Footer, Content } = Layout;
    // Use prop this way 
    // const data = {co : 200} 
    return (
      <Layout style={{ minHeight: '100vh', background: '#fff' }}>
        {settings.sidebar && <SideBar />}
        <Layout>
          <Content>
            <Header />
            {settings.stats && <Stats />}
            {settings.tabdata && <TabContent />}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Xpparal Design ©2020 Created by XXXXXX</Footer>
        </Layout>
      </Layout >
    )
  }
}

export default App;
