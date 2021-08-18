//import Footer from '../../component/footer'
//import appNav from '../../component/appNav'
import Appnav from "../../components/appNav/appNav"
import Footer from "../../components/footer/footer"
const layout =({children})=>{
    return(
        <div className="container py-2">
         <Appnav/>
        {children}
        <Footer/>
        </div>

    )
}

export default layout