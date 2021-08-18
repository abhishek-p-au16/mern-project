import {Switch,Route} from 'react-router-dom'




import routes from "./routes";
//import {PATH} from './config/'
import Layout from './containers/layout'


function App() {

  return (
    
     <Layout>
      <Switch>
       
         {routes.map(route =><Route key ={Math.random} {...route} /> )}
      
      </Switch>
     </Layout>
     
 
  );
}

export default App;
