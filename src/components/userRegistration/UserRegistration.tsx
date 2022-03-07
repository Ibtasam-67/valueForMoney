import React from 'react'
import "./UserRegistration.css"
import { Form, Input, Button, Checkbox } from 'antd';


const UserRegistration = () => {
      const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
   <div  className='form'>
      <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
       
      >
        <Input className='form-input'/>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
       
        rules={[{ required: true, message:
             'Please input your Email!' }]}
       
      >
        <Input className='form-input'/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password  className='form-input'/>
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}
    
    >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" className='button'>
          Register
        </Button>
      </Form.Item>
    </Form>
</div>
  )
}

export default UserRegistration