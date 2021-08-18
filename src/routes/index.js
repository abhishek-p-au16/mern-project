import PATH from "../config/webPath"
import login from "../containers/login"
import signup from "../containers/signup"
import profile from "../containers/profile"
import home from "../containers/home"
const routes =[
    {path:PATH.HOME,exact:true,component:home},
    {path:PATH.LOGIN,exact:true,component:login },
    {path:PATH.PROFILE,exact:true,component:profile},
    {path:PATH.SIGNUP,exact:true,component:signup}

]
export default routes