import CustomNavBar from "../home/CustomNavBar";


const HomeView = () => {


    const routes = [
        
        {name:"Log-in", type:"normal", link:"/Login"},
        
        {name:"Sing-Up", type:"normal", link:"/SingUp"},
        
        {name:"About", type:"options", link:"", opts:[
            {name:"Developer", link:"/Login"},
            {name:"Project", link:"/Login"},
            {name:"Tools - Used", link:"/Login"}
        ]},

    ], titulo = "AniGallery";

    return(
        <div>
            <CustomNavBar 
            routes = {routes}
            title = {titulo}
            />


        </div>
    );


}

export default HomeView;