 import FooterLayout from '../footer/FooterLayout'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const MainScreen = () => {
  return (
    <div>
        <Navbar/>
        <Sidebar />
        
        <FooterLayout/>
    </div>
  )
}

export default MainScreen