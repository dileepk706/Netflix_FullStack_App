import styled from "styled-components"
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Header=({login})=>{
    const navigate=useNavigate()
    let [Login,setLogin]=useState(true)
    const loginPageHelper=()=>{

        console.log(Login);
        console.log('sdfgjhdjhn');
        setLogin(p=>{
            if(p===true)return false
            if(p==false)return true
        })
       
        console.log(Login);
        navigate(Login?"/login":"/signup")

    }
  
    return(
        <Container className="flex j-between a-center">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div> 
            <button onClick={()=>loginPageHelper()}>{Login?'login':'signup'}</button>
        </Container>
    )
}
export default Header

const Container=styled.div`

    padding: 0 4rem;
    .logo{
        img{
            height: 5rem;
        }
    }
    button{
        padding:0.5rem 1rem ;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
        color: white;
    }
`;