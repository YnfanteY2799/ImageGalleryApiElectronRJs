

const CardTemplate = ({imgSource = "https://i.imgur.com/ZTkt4I5.jpg", cardTitle, cardSubTitle, description, }) => (
<div class="card" style={{width:"18rem"}}>
  <img src={imgSource} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{cardTitle}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{cardSubTitle}</h6>
        <p class="card-text">{description}</p>
    <button href="#" class="btn  mr-2">
        <i class="fas fa-link"></i> FullSize
    </button>
    <button href="#" class="btn"><i class="fab fa-github"></i> Generate </button>
  </div>
</div>
);

const RootView = () => {

    return (
        <div className="card-columns right p-3">
            <div className="container">
                <div className="row">
                    <CardTemplate/>
                </div>
            </div>
        </div>
    )
}


export {RootView};