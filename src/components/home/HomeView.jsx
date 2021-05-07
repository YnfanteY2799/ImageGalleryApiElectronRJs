import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CustomNavBar from "../home/CustomNavBar";
import { DeveloperView, ToolsView, ProjectView } from "../about/AboutView";
import RequestView from "../reset/RequestView";
import LogInView from "../log-in/LogInView";
import SigInView from "../log-in/SignInView";
import { RootView } from './RootView';


const HomeView = () => {



    const routes = [
        {name:"AniGallery",type:"title", link:"/", component:RootView},
        {name:"Log-in", type:"normal", link:"/Login", component:LogInView },
        {name:"Sing-Up", type:"normal", link:"/SingUp", component:SigInView},
        {name:"About", type:"optionsContainer0", link:"", component:null, opts:[
            {name:"Developer", link:"/About/Developer"},
            {name:"Project", link:"/About/Project"},
            {name:"Tools - Used", link:"/About/Tools"},
            {name:"Request", link:"/About/Request"},
        ]},
        {name:"Developer", type:"option0", link:"/About/Developer", component:DeveloperView},
        {name:"Project", type:"option0", link:"/About/Project", component:ProjectView},
        {name:"Tools - Used", type:"option0", link:"/About/Tools", component:ToolsView},
        {name:"Request", type:"option0", link:"/About/Request", component:RequestView},
    ];

    return(
        <Router>
            <div>
                <CustomNavBar routes = {routes}/>
                <Switch>
                    {routes.map((opt,idxe) => opt.component !== null &&  <Route key={idxe} path={opt.link} exact={true}>{<opt.component/>}</Route>)}
                </Switch>
            </div>
        </Router>
    );


}

export default HomeView;