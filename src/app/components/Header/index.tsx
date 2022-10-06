import React, { Component } from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { Drawer, Button } from 'antd';
import { AlignCenterOutlined } from '@ant-design/icons';

import './style.less';
import { Link } from 'react-router-dom';

class MainHeader extends Component {
  state = {
    current: 'mail',
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <nav
        className="menuBar"
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          boxShadow: 'rgba(0, 0, 0, 0.18) 0px 2px 4px',
        }}
      >
        <div className="logo">
          <h3 style={{ marginBottom: 0 }}>
            <Link to="./">
              <img src="" alt=""/>
            </Link>
          </h3>
        </div>
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="barsMenu">
            <Button onClick={this.showDrawer}>
              <AlignCenterOutlined />
            </Button>
          </div>
          <Drawer
            title="Menu"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default MainHeader;
