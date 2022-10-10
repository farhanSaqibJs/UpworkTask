import React, { Component } from 'react';
import { Menu} from 'antd';
import { Link } from 'react-router-dom';
import './style.less';

class LeftMenu extends Component {
  render() {
    return (
      <Menu mode={'horizontal'} title={"Menu"}>
        <Menu.Item>
          <Link to={'/plans'}> About </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={'/plans'}> Discover </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={'/plans'}> Plans </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={'/plans'}> Contact </Link>
        </Menu.Item>
        <Menu.Item>
          <Link to={'/plans'}> Become a partner </Link>
        </Menu.Item>
          <Menu.Item>
          <Link to={'/login'}> Login </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default LeftMenu;
