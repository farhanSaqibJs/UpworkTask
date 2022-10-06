import React from 'react';
import {Layout} from 'antd';
import './style.less';
import MainHeader from '../Header';
import MainFooter from '../Footer';

const {Content} = Layout;

export function Layout1(props) {
    return (
        <>
            <Layout>
                <div style={{backgroundImage: `url(./background.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    <MainHeader/>
                    <Content className="site-layout" style={{paddingTop: 60}}>
                        <section
                            className="childWrapper"
                            style={{padding: 24, background: "transparent"}}
                        >
                            {props.children}
                        </section>
                    </Content>
                </div>
            </Layout>
            <MainFooter/>
        </>
    );
}

export default Layout1;
