const CustomNavBar = (props) =>{

    const { routes, title } = props;

    console.log(routes);

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#/">{title}</a>


            </div>
        </nav>
    );

}


export default CustomNavBar;