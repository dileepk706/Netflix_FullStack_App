import backgroundImage from "../assets/login.jpg"
import styled from "styled-components"

const BackgroundImage=()=>{
    return(
        <Container>
            <img src={backgroundImage} alt="backgroundImage" />
        </Container>
    )
}
export default BackgroundImage

const Container=styled.div`
/* height: 100vh;
width: 100vw; */
width: 100%;
height: 100vh;
overflow: hidden;
  img {
    height: 100%;
    width: 100%;
  }
`;