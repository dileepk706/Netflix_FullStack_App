import styled from "styled-components"
import Header from "../components/Header"
import BackgroundImage from "../components/BackgroundImage"
import { useState } from "react"
import {createUserWithEmailAndPassword,onAuthStateChanged,} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const navigate=useNavigate()
    let [showPassword,setShowPassword]=useState(false)
    let [formVal,setFormVal]=useState({email:'',password:''})
    const loginHelper=()=>{
        try {
            const {email,password}=formVal
            createUserWithEmailAndPassword(firebaseAuth,email,password)
        } catch (error) {
            console.log(error.message);
        }
    }
    onAuthStateChanged(firebaseAuth,(currentUser=>{
        console.log(currentUser);
        currentUser&&navigate('/')
    }))
    
    return (
        <Container>
            <BackgroundImage />
            <div className="content ">
                <Header />
                <div className="body flex column j-center a-center">
                    <div className="text">
                        <h1>Unlimited movies, TV shows and more</h1>
                        <h4>Watch anywhere. Cancel anytime</h4>
                        <h6>Ready to watch? Enter your mail to create or restart membership</h6>
                    </div>
                    <div className={showPassword?"b-form":'form'}>
                        <input type="text" placeholder="Email address" value={formVal.email} onChange={(e)=>{
                            setFormVal({...formVal,email:e.target.value})
                        }} name="email" />
                        {showPassword?(<input type="password" placeholder="password" name="password" value={formVal.password} onChange={(e)=>{
                            setFormVal({...formVal,password:e.target.value})
                        }} />):<button onClick={()=>setShowPassword(true)}>Get started</button>}
                        
                        
                    </div>
                    {showPassword&&<button onClick={loginHelper}>signup</button>}
                    
                </div>
            </div>
        </Container>

    )
}
export default Signup

const Container = styled.div`
  position: relative;
  //neww  
  width: 100%;
  .content{
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.5);
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body{
        gap: 1rem;
        .text{
            gap: 1rem;
            text-align: center;
            font-size: 2rem;
            h1{
                padding: 0 25rem;
            }
        }
        .form{
            width: 60%;
            display: grid;
            grid-template-columns:  2fr 1fr;
            input{
                padding: 1rem;
                color: black;
                font-size: 1rem;
                
            }
            button{
                padding: 0.5rem 1rem;
                background-color: rgb(229, 9, 20);
                border: none;
                cursor: pointer;
                border-radius: 0.2rem;
                font-weight: bolder;
                font-size: 1.05rem;
                color: white;
            }
        }
        .b-form{
            width: 60%;
            display: grid;
            grid-template-columns:1fr 1fr;
            input{
                padding: 1rem;
                color: black;
                font-size: 1rem;
                
            }
            button{
                padding: 0.5rem 1rem;
                background-color: rgb(229, 9, 20);
                border: none;
                cursor: pointer;
                border-radius: 0.2rem;
                font-weight: bolder;
                font-size: 1.05rem;
                color: white;
            }
        }
        button{
                padding: 0.5rem 1rem;
                background-color: rgb(229, 9, 20);
                border: none;
                cursor: pointer;
                border-radius: 0.2rem;
                font-weight: bolder;
                font-size: 1.05rem;
                color: white;
            }
    }
  }
`;