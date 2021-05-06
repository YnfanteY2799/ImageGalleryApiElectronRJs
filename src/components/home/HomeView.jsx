import { BrowserRouter as Router } from 'react-router-dom';
import CustomNavBar from "../home/CustomNavBar";
import { DeveloperView, ToolsView, ProjectView } from "../about/AboutView";
import ResetView from "../reset/ResetView";
import LogInView from "../log-in/LogInView";
import SigInView from "../log-in/SignInView";

const HomeView = () => {


    const routes = [
        {name:"Log-in", type:"normal", link:"/Login", component:LogInView },
        {name:"Sing-Up", type:"normal", link:"/SingUp", component:SigInView},
        
        {name:"About", type:"options", link:"", opts:[
            
            {name:"Developer", link:"/About/Developer", component:DeveloperView},
            
            {name:"Project", link:"/About/Project", component:ProjectView},
            
            {name:"Tools - Used", link:"/About/Tools", component:ToolsView},

            {name:"Reset User", link:"/About/Reset", component:ResetView},

        ]},

    ], titulo = "AniGallery";

    return(
        <Router>
            <div>
                <CustomNavBar 
                routes = {routes}
                title = {titulo}
                />
            </div>
        </Router>
    );


}

export default HomeView;