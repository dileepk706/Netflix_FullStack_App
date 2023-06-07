import Navbar from "../components/Navbar"
import home from "../assets/home.jpg"

const Netflix=()=>{

    return(
      <>
      <Navbar></Navbar>
      <img width='100%' src={home} alt="home" />
      </>
      
    )
}

export default Netflix