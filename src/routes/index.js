import PATH from "../config/webPath"
import login from "../containers/login"
import signup from "../containers/signup"
import cart from "../containers/cart"
import home from "../containers/home"
const routes =[
    {path:PATH.HOME,exact:true,component:home},
    {path:PATH.LOGIN,exact:true,component:login },
    {path:PATH.CART,exact:true,component:cart},
    {path:PATH.SIGNUP,exact:true,component:signup}

]
export default routes