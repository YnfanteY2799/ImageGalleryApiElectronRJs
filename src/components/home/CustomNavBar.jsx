import { useState } from "react";
import { Route } from "react-router-dom";

const OptNavBar = ({ routes }) => routes.map( (opt, idx) =>
 (
 <div className="nav-item">
    <Route key={ idx } className="nav-link" path={ opt.link } component={opt.component} exact> 
        { opt.name }
        {/* <a className="nav-link" href={opt.link}> { opt.name } </a>  */}
    </Route>
 </div>
 )
);


const CustomNavBar = ( { routes, title } ) =>{

    const simpleOpts = routes.filter(x => x.type !== "options"),
    complexOpts = routes.filter(x => x.type === "options")[0];

    const [ openBurguer, setOpenBurguer ] = useState(false);
    const [ openOptions, setOpenOptions ] = useState(false);

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            
            <div className="container-fluid">
                
                <a className="navbar-brand" href="/">{title}</a>
                
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
                            aria-expanded="false" onClick={() => setOpenOptions(!openOptions)}>
                                {complexOpts.name}    
                            </b>    
                                
                            <ul className={`dropdown-menu ${openOptions ? "show" : ""}`} aria-labelledby="navbarDropdown" style={{textAlign:"center"}}>
                                {complexOpts.opts.map((optx, idxe) =>
                                    <li key={idxe}>
                                        <a className="dropdown-item" href={optx.link}>{optx.name}</a>    
                                    </li>
                                )}
                            </ul>

                        </li>
                    
                    </ul>
                    
                    <div className="d-flex">
                       
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        
                        <button className="btn btn-outline-success" type="submit">Search</button>
                   
                    </div>

                </div>

            </div>

        </nav>
    );

}


export default CustomNavBar;