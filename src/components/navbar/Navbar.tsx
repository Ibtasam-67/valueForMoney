import "./Navbar.css"
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const Navbar = () => {
  return (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%'
 }}>
     <img
  className="logo"
  src="https://www.skysens.io/images/white-logo.png"
/>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} 
      style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item key="4">nav 4</Menu.Item>
        <Menu.Item key="5">nav 5</Menu.Item>
        <Menu.Item key="6">nav 6</Menu.Item>   
      </Menu>
    </Header>
  </Layout>
  
);
  
}

export default Navbar