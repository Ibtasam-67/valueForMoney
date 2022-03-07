import "./FooterLayout.css"
import Layout from "antd/lib/layout/layout"
const   Footer = Layout;

const FooterLayout = () => {
  return (
    <div>
      <Layout>
        <Footer  className="footer">Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
      
    </div>
  )
}

export default FooterLayout