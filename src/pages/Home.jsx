import Card from "./components/card"
import Navbar from "./components/Navbar"

function Home(){
    return(
      <>
        <Navbar/>
        <div className="flex flex-row">
        <Card/>
        <Card/>
        <Card/>
        <Card />
     </div>
      </>
    )
}
export default Home