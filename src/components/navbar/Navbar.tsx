import "./Navbar.css"
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
const { Header } = Layout;


const Navbar = () => {
  return (
  <Layout >
    <Header style={{ position: 'fixed', zIndex: 1,
     width: '100%'
 }}>
     <img
  className="logo"
  src="https://www.skysens.io/images/white-logo.png"
/>
 
      <Menu theme="dark" mode="horizontal"
       defaultSelectedKeys={['1']} 
      style={{display:"flex",flexDirection:"row"
      ,justifyContent:"flex-end"}}
      >
           
        <Menu.Item key="4">Home</Menu.Item>
        <Link to="/login" className="login-link">
           <Menu.Item key="6" className="menu-item">Login</Menu.Item>   
        </Link>
      
     
      </Menu>
    </Header>
  </Layout>
  
);
  
}

export default Navbar