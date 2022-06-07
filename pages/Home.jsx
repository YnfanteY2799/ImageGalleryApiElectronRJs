import { AppBar } from "../components/NavigationComponents.jsx";




export default function Home(){

  let countries = [1,2,3,4,5,6,7,8,9];


  return <>
      <AppBar />
    <div>

      <div className="container">

        {countries.map((x,i) => <p key={i}>{x}</p>)}
        
      </div>

    </div>
    </>;

}