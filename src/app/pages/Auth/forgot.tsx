import React from 'react';
import Layout1 from '../../components/Layout1';
import { UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row } from 'antd';
import { Link } from 'react-router-dom';

export function Forgot() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <>
      <Layout1>
        <Row justify={'center'} align={'middle'} className={'heroPageHeight'}>
          <Col xs={24} md={12} lg={6} xl={6} xxl={6}>
            <Row justify={'center'} style={{ marginTop: '30px' }}>
              <Col>
                <div className="sectionTitle">
                  <h1>Submit Registered Email</h1>
                </div>
              </Col>
            </Row>
            <Card>
              <Form
                name="normal_login"
                layout="vertical"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      type: 'email',
                      required: true,
                      message: 'Please input your Email!',
                    },
                  ]}
                >
                  <Input
                    type={'email'}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                  >
                    Submit
                  </Button>
                </Form.Item>

                <Link to="./register">register now!</Link>
              </Form>
            </Card>
          </Col>
        </Row>
      </Layout1>
    </>
  );
}
