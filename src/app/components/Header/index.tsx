import React, {Component} from 'react';
import LeftMenu from './LeftMenu';
import {Drawer, Button, Col, Row} from 'antd';

import './style.less';
import {AlignCenterOutlined} from "@ant-design/icons";

class MainHeader extends Component {
    state = {
        current: 'mail',
        visible: false,
    };
    showDrawer = (e) => {
        e.preventDefault();
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
                                    <a href="./">
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
                                        {/*<span className="barsBtn">*/}
                                        {/*    */}
                                        {/*</span>*/}
                                        <AlignCenterOutlined color={"#25AB75"} />
                                    </Button>
                                    <Drawer
                                        title="LM Fitness"
                                        placement="right"
                                        closable={false}
                                        onClose={this.onClose}
                                        visible={this.state.visible}
                                        maskClosable={true}
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
