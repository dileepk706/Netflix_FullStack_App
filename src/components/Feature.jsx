import styled from "styled-components"
import home from "../assets/home.jpg"
import { Info, InfoOutlined, PlayArrow } from "@material-ui/icons"
import homeTitle from '../assets/homeTitle.webp'
const Feature=()=>{

    return(
        <Container>
            <img width='100%' src={home} alt="home" />
            <div className="info">
                <img
                    src={homeTitle}
                />
                 
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/> 
                        <span>play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                    </button>
                </div>
            </div>   
        </Container>
    )
}

export default Feature

const Container=styled.div`
    width: 100%;
    height: 90vh;
    /* position: absolute; */
    background-color: rgb(0,0,0,0.5);
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .info{
        width: 35%;
    position: absolute;
    left: 50px;
    bottom: 165px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 35px;

        img{
            width: 460px;
        }
        .buttons{

            display: flex;
            button{
                padding: 10px 20px;
        border: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 500;
        margin-right: 10px;
        cursor: pointer;
            }
        .play {
          background-color: white;
          color: black;
        }

        .more {
          background-color: gray;
          color: white;
        }
        }
    }
`