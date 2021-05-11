

const AddingCardView = ({cardsStyle, lastCard, defaultImgCover}) => (
    <div className="card" style={cardsStyle} key={lastCard}>
        <div className="card-body" key={lastCard}>
            <img src={defaultImgCover} className="card-img-top border border-dark rounded" alt="..."
            style={{height:"200px",width:"225px"}}/>
            <div className="card">
                <h5 className="card-title">Add a new Api</h5>
                <p className="card-text">
                    {"Add a new Api, it can be any kind of API, not just image API's, try adding something new :)"}
                </p>
                <i className="btn btn-primary">Add</i>
            </div>

        </div>
    </div>
);

const RootView = () => {

    const  cards = [
        {
            apiName:"Giphy",
            apiDescription:"Api Test Giphy",
            apiImg:"https://variety.com/wp-content/uploads/2016/10/giphy-logo-e1477932075273.png?w=867",
            apiLink:"",
            apiKey:"",
            
        },
        {
            apiName:"Lorem Picsum",
            apiDescription:"Api Test Lorem Picsum",
            apiImg:"",
            apiLink:"",
            apiKey:"",
        },
    
    ],defaultImgCover = "https://thumbs.dreamstime.com/b/gallery-icon-vector-miscellaneous-collection-thin-line-gallery-outline-icon-vector-illustration-linear-symbol-use-142671937.jpg";
    const cardsStyle = {
        width: "35%",
    };

    return (
        <div className="card-columns right p-3">
            <div className="container">
                
                
                
                <div className="row">

                    {cards.map((xe,xeid) => 
                        <div className="col-6 col-sm-3" key={xeid}>
                            <div className="card-body" key={xeid}>

                                <img className="card-img-top border border-dark rounded" 
                                src={xe.apiImg === "" ? defaultImgCover : xe.apiImg} alt="..."/>
                                
                                <div className="card">
                                    
                                    
                                    <h5 className="card-title">{xe.apiName}</h5>
                                    <div className="card-body">
                                        <p className="card-text">{xe.apiDescription}</p>
                                    </div>
                                    <button className="btn btn-primary">Button</button>
                                
                                
                                
                                </div>

                            </div>
                        </div>
                    )}
                    
                    <div className="col-6 col-sm-3" key={cards + 1}>
                        <div className="card-body" key={cards + 1}>
                            
                            <img src={defaultImgCover} className="card-img-top border border-dark rounded" alt="..."/>
                            <div className="card">
                                
                                <h5 className="card-title">Add a new Api</h5>
                                <p className="card-text">
                                    {"Add a new Api, it can be any kind of API, not just image API's, try adding something new :)"}
                                </p>
                                <i className="btn btn-primary">Add</i>
                            
                            </div>

                        </div>

                    </div>


                </div>



            </div>
        </div>
    )
}


export {RootView};