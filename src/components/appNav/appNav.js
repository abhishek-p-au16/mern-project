
import LABELS from "../../config/labels"
import HeaderLink from "../headerlink"
import PATH from "../../config/webPath"
const appNav =()=>{
    return(
      
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
      
      
        <span className="fs-4">E-CART</span>
    

      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <HeaderLink to={PATH.LOGIN} name={LABELS.login}/>
          <HeaderLink to={PATH.SIGNUP} name={LABELS.signup}/>
          <HeaderLink to={PATH.PROFILE} name={LABELS.profile}/>
        
        
      </nav>
    </div>

   

    )
 
}

export default appNav