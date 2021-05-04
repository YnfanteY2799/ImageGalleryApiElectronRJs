import CustomNavBar from "../home/CustomNavBar";


const HomeView = () => {


    const routes = [], titulo = "AniGallery";

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