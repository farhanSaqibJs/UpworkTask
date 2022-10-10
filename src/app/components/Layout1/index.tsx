import React from 'react';
import {Layout} from 'antd';
import './style.less';
import MainHeader from '../Header';
import MainFooter from '../Footer';

const {Content} = Layout;

export function Layout1(props) {
    return (
        <>
            <Layout style={{ position: 'relative' }}>
                <div style={{backgroundImage: `url(./background.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <MainHeader/>
                    <Content className="site-layout" style={{paddingTop: 60}}>
                        <section
                            className="childWrapper"
                            style={{ background: "transparent"}}
                        >
                            {props.children}

                            <div className="chatBot">
                                <img src="./chatIcon.png" alt="chatIcon.png"/>
                            </div>
                        </section>
                    </Content>
                </div>
            </Layout>
            <MainFooter/>
        </>
    );
}

export default Layout1;
