import React from 'react';
import Layout1 from '../../components/Layout1';
import {Button, Card, Checkbox, Col, Form, Input, Row} from 'antd';
import FloatInput from "../../components/FloatInput";
import {Link} from 'react-router-dom';
import './style.less'

const validator = {
    require: {
        required: true,
        message: "Required"
    }
};

export function Login(props) {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };
    return (
        <>
            <Layout1>
                <div className="container">
                    <Row justify={'start'} align={'middle'} className={'heroPageHeight'}>
                        <Col xs={24} md={12} lg={8} xl={8} xxl={7}>
                            <Row justify={'center'} style={{marginTop: '30px'}}>
                                <Col>
                                    <div className="sectionTitle">
                                        <h1>Become a member</h1>
                                        <p>
                                            When you sign up, you also purchase and subscribe to the plan you choose
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                            <Card className={"cardDot"}>
                                <Form
                                    name="normal_login"
                                    layout="vertical"
                                    className="login-form"
                                    initialValues={{remember: true}}
                                    onFinish={onFinish}
                                >
                                    <Form.Item name="email" rules={[validator.require]} hasFeedback>
                                        <FloatInput
                                            label="Email"
                                            type="email"
                                            placeholder="Email here please"
                                            name="email"
                                        />
                                    </Form.Item>
                                    <Form.Item name="email" rules={[validator.require]} hasFeedback>
                                        <FloatInput
                                            label="Passowrd"
                                            name="password"
                                            placeholder="Password"
                                            rules={[
                                                {required: true, message: 'Please input your Password!'},
                                            ]}
                                        />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button
                                            block
                                            type="primary"
                                            htmlType="submit"
                                            className="login-form-button"
                                        >
                                            Submit
                                        </Button>
                                    </Form.Item>
                                    <div style={{textTransform: 'uppercase', marginTop: '50px', textAlign: 'center'}}>
                                        <Link to="./login">Login now!</Link>
                                    </div>
                                </Form>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Layout1>
        </>
    );
}
