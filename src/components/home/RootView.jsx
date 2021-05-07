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
        width: "20%",
    };

    return (
        <div className="container">
        {
        cards.map((xe,idxe) =>(
                <div key={idxe} className="row">
                    
                    <div className="col-sm card" style={cardsStyle}>
                    
                        <img src={xe.apiImg === "" ? defaultImgCover : xe.apiImg} className="card-img-top" alt="..."/>
                    
                        <div className="card-body">
                    
                            <h5 className="card-title">{xe.apiName}</h5>
                            <p className="card-text">{xe.apiDescription}</p>
                            <i className="btn btn-primary">Test Api</i>
                    
                        </div>
                    
                    </div>
                    
                </div>))
        }
                
        </div>
    
    )
}


export {RootView};