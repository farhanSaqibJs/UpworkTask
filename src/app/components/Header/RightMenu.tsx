import React, { Component } from 'react';
import { Menu } from 'antd';
import './style.less';
import { Link } from 'react-router-dom';

class RightMenu extends Component {
  render() {
    return (
      <Menu mode={'horizontal'}>
        <Menu.Item>
          <Link to={'/register'}> Register </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={'/login'}> Login </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default RightMenu;
