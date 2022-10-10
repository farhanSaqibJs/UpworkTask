import * as React from 'react';
import {Helmet} from 'react-helmet-async';
import './style.less';
import Layout1 from "../../components/Layout1";
import {CheckOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {Col, Row} from "antd";

export function AllPlans() {
    return (
        <>
            <Helmet>
                <title>HomePage</title>
                <meta name="description" content="A Raghad application homepage"/>
            </Helmet>

            <Layout1>
                <div className="allPlansPage">
                    <div className="container">
                        <Row justify={"center"}>
                            <Col>
                                <div className="cardPreContent">
                                    <div className="sectionTitle">
                                        <h1>Selected plan</h1>
                                        <p>
                                            Pay one subscription and visit different gyms. Use our app as a ticket to
                                            the gyms
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row justify={"center"}>
                            <Col xs={24} md={24} lg={12} xl={8} xxl={7}>
                                <div className="paymentCard">
                                    <div className="cardHead">
                                        <h2><label htmlFor="">20</label> <p>$</p> <span>/Month</span></h2>
                                    </div>
                                    <div className="planType" style={{
                                        backgroundImage: `url(./bronze.png)`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }}>
                                        <h3>Bronze</h3>
                                    </div>

                                    <div className="planPoints">
                                        <ul>
                                            <li>
                                                <label><CheckOutlined/></label>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </li>
                                            <li>
                                                <label><CheckOutlined/></label>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </li>
                                            <li>
                                                <label><CheckOutlined/></label>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div style={{textTransform: 'uppercase', marginTop: '50px', textAlign: 'center'}}>
                                        <Link to="./login">Discover related gyms</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} md={24} lg={12} xl={8} xxl={7}>
                                <div className="paymentCard">
                                    <div className="cardHead">
                                        <h2><label htmlFor="">35</label> <p>$</p> <span>/Month</span></h2>
                                    </div>
                                    <div className="planType" style={{
                                        backgroundImage: `url(./silver.png)`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }}>
                                        <h3>Silver</h3>
                                    </div>

                                    <div className="planPoints">
                                        <ul>
                                            <li>
                                                <label><CheckOutlined/></label>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </li>
                                            <li>
                                                <label><CheckOutlined/></label>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </li>
                                            <li>
                                                <label><CheckOutlined/></label>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div style={{textTransform: 'uppercase', marginTop: '50px', textAlign: 'center'}}>
                                        <Link to="./login">Discover related gyms</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={24} md={24} lg={12} xl={8} xxl={7}>
                                <div className="paymentCard">
                                    <div className="cardHead">
                                        <h2><label htmlFor="">49</label> <p>$</p> <span>/Month</span></h2>
                                    </div>
                                    <div className="planType" style={{
                                        backgroundImage: `url(./paymentCardType.png)`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }}>
                                        <h3>Gold</h3>
                                    </div>

                                    <div className="planPoints">
                                        <ul>
                                            <li>
                                                <label><CheckOutlined/></label>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </li>
                                            <li>
                                                <label><CheckOutlined/></label>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </li>
                                            <li>
                                                <label><CheckOutlined/></label>
                                                <p>Lorem ipsum dolor sit.</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <div style={{textTransform: 'uppercase', marginTop: '50px', textAlign: 'center'}}>
                                        <Link to="./login">Discover related gyms</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Layout1>
        </>
    );
}
