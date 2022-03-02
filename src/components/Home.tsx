 import {  Typography,Space } from 'antd';

const { Title  } = Typography;
 

const Home = () => {
  return (
      
    <Typography>
       <Space 
        style={{width: '100%', justifyContent: 'center'}}>
           <Title level={1} type="danger">Value For Money</Title>
       </Space>
    </Typography>
     
   
    
  )
}

export default Home