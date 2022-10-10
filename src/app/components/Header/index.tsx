import React, {Component} from 'react';
import LeftMenu from './LeftMenu';
import {Drawer, Button, Col, Row} from 'antd';

import './style.less';

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

            <nav className="menuBar">
                <div className="container">
                    <Row>
                        <Col span={24}>
                            <div className="navBarInner">
                                <div className="logo">
                                    <a href="">
                                        <img src="./Logo.png" alt=""/>
                                    </a>
                                </div>
                                <div className="menuCon">
                                    <div className="leftMenu">
                                        <LeftMenu/>
                                    </div>
                                    <div className="rightMenu">
                                        {/*<RightMenu />*/}
                                    </div>
                                    <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                                        <span className="barsBtn"></span>
                                    </Button>
                                    <Drawer
                                        title="Basic Drawer"
                                        placement="right"
                                        closable={false}
                                        onClose={this.onClose}
                                        visible={this.state.visible}
                                    >
                                        <LeftMenu/>
                                        {/*<RightMenu />*/}
                                    </Drawer>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </nav>
        );
    }
}

export default MainHeader;
