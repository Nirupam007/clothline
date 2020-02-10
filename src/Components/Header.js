import React from 'react';
import { Layout } from 'antd';
import logo from '../assets/hanger.svg'
import './Header.css';
class Header extends React.Component {
    render() {
        const { Header } = Layout;
        return (
            <Header className="header" style={{ height: '68px', background: '#fff', borderBottom: 'solid 1px #e5e5e5' }}>
                <div className="brand"><img src={logo} className="brandlogo" alt="Xpparel logo" /></div>
            </Header>
        )
    }
}

export default Header;

