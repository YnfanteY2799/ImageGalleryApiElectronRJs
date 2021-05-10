import { useState } from "react";
import { Link } from "react-router-dom";

const OptNavBar = ({ routes }) => routes.filter(x => x.type !== "title").map( (opt, idx) =>
 (
 <div key={ idx } className="nav-item">
    <Link key={ idx } className="nav-link" to={ opt.link }> 
        { opt.name }
    </Link>
 </div>
 )
);


const CustomNavBar = ( { routes } ) =>{

    const simpleOpts = routes.filter(x => !x.type.includes("option")),
    complexOpts = routes.filter(x => x.type === "optionsContainer0" || x.type === "option0");

    const [ openBurguer, setOpenBurguer ] = useState(false);
    const [ openOptions1, setOpenOptions1 ] = useState(false);
    const [ search, setSearch] = useState("");


    var idClosser = ( event ) => event.target.id !== "navbarSupportedContent" && setOpenOptions1(!openOptions1);
        
    


    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" onClick={(e) => idClosser(e)}>
            
            <div className="container-fluid">
                
                <Link className="navbar-brand" to={routes[0].link}>{routes[0].name}</Link>
                
                <button className="navbar-toggler" onClick={ () => setOpenBurguer(!openBurguer)}
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>

                </button>
                
                <div className={`collapse navbar-collapse ${openBurguer ? "show" : ""}`} id="navbarSupportedContent">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                        <OptNavBar routes = {simpleOpts}/>
                        
                        <li className="nav-item">
            
                            <b className="nav-link dropdown-toggle" role="button" 
                            id="navbarDropdown" data-bs-toggle="dropdown" 
                            aria-expanded="false" onClick={() => setOpenOptions1(!openOptions1)}>
                                {complexOpts[0].name}    
                            </b>    
                                
                            <ul className={`dropdown-menu ${openOptions1 ? "show" : ""}`} aria-labelledby="navbarDropdown" style={{textAlign:"center"}}>
                                {complexOpts.filter(x => x.type !== "optionsContainer0").map((optx, idxe) =>
                                    <li key={ idxe } >
                                        <Link key={idxe} className="dropdown-item" to={optx.link} onClick={()=> setOpenOptions1(!openOptions1)} id="navbarSupportedContent">{optx.name}</Link>    
                                    </li>
                                )}
                            </ul>

                        </li>
                    
                    </ul>

                    <div className="d-flex">
                        <input className="form-control me-2" 
                        type="search" placeholder="Search for ..." 
                        value={search} onChange={(e) => setSearch(e.target.value)}/>
                   </div>

                </div>

            </div>

        </nav>
    );

}


export default CustomNavBar;