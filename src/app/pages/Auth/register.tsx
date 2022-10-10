import React from 'react';
import Layout1 from '../../components/Layout1';
import {Button, Card, Col, Form, Row} from 'antd';
import FloatInput from "../../components/FloatInput";
import {Link} from 'react-router-dom';
import './style.less'
import PaymentCard from "../../components/paymentCard";

const validator = {
  require: {
    required: true,
    message: "Required"
  }
};

export function Register() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
      <Layout1>
        <div className="container">
          <Row justify={'start'} align={'middle'} className={'heroPageHeight'}>
            <Col xs={24} md={24} lg={12} xl={8} xxl={7}>
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
                  <div style={{display: 'flex', gap: '15px'}}>
                    <div>
                      <Form.Item name="fName" rules={[validator.require]} hasFeedback>
                        <FloatInput
                          label="First Name"
                          type="test"
                          placeholder="First Name"
                          name="fName"
                        />
                      </Form.Item>
                    </div>
                    <div>
                      <Form.Item name="sName" rules={[validator.require]} hasFeedback>
                        <FloatInput
                          label="Second Name"
                          type="test"
                          placeholder="Second Name"
                          name="sName"
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <Form.Item name="email" rules={[validator.require]} hasFeedback>
                    <FloatInput
                      label="Email"
                      type="email"
                      placeholder="Email here please"
                      name="email"
                    />
                  </Form.Item>
                  <Form.Item name="phoneNumber" rules={[validator.require]} hasFeedback>
                    <FloatInput
                      label="phone Number"
                      type="number"
                      placeholder="Phone Number"
                      name="phoneNumber"
                    />
                  </Form.Item>
                  <Form.Item name="date" rules={[validator.require]} hasFeedback>
                    <FloatInput
                      type="date"
                      name="date"
                    />
                  </Form.Item>
                  <Form.Item
                    name="Password"
                    rules={[validator.require]}
                    hasFeedback
                  >
                    <FloatInput
                      label="Password"
                      type="password"
                      name="Confirm Password"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                      <ul className={"errorListing"}>
                        <li>
                          <p>
                            <div>
                              &#10003;
                            </div>
                            <span>
                             Lowercase letters
                           </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <div>
                              &#10003;
                            </div>
                            <span>
                             Uppercase letters
                           </span>
                          </p>
                        </li>
                        <li>
                          <p>
                            <div>
                              &#10003;
                            </div>
                            <span>
                             number
                           </span>
                          </p>
                        </li>
                      </ul>
                    </Form.Item>
                  </Form.Item>

                  <Form.Item
                    name="Confirm Password"
                    rules={[validator.require]}
                    hasFeedback
                  >
                    <FloatInput
                      label="Confirm Password"
                      type="password"
                      name="Confirm Password"
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      block
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      sign up for 49$
                    </Button>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      block
                      type="ghost"
                      className="login-form-button"
                    >
                      Select other plan
                    </Button>
                  </Form.Item>

                  <div style={{textTransform: 'uppercase', marginTop: '50px', textAlign: 'center'}}>
                    <Link to="./login">Login now!</Link>
                  </div>
                </Form>
              </Card>
            </Col>
            <Col xs={24} md={24} lg={12} xl={8} xxl={10}>
              <Row className="cardGrid">
                <PaymentCard />
              </Row>
            </Col>
          </Row>
        </div>
      </Layout1>
    </>
  );
}
