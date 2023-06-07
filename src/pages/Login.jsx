
import styled from "styled-components"
import Header from "../components/Header"
import BackgroundImage from "../components/BackgroundImage"
import { useEffect, useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()

    let [formVal, setFormVal] = useState({ email: '', password: '' })
    let [loading,setLoading]=useState(false)
    let [error,setError]=useState('')

    const loginHelper = async() => {
        console.log(formVal);
        setLoading(true)
        setError('')
        const {email,password}=formVal
        try {
            await signInWithEmailAndPassword(firebaseAuth, email, password);
        } catch (error) {
            if(error.code==='auth/wrong-password'
            || error.code==='auth/invalid-email' 
            || error.code==='auth/user-not-found' 
            ||error.code==='auth/missing-password'){
                setError('invalid-email or wrong-password')
                setLoading(false)
            }
            console.log(error );
          }
    }

    useEffect(()=>{
        onAuthStateChanged(firebaseAuth, (currentUser) => {
            
            if (currentUser){
                setLoading(false)
                navigate("/");
            } 
        });
    })
   

    // onAuthStateChanged(firebaseAuth, (currentUser => {
    //     console.log(currentUser);
    //     currentUser && navigate('/')
    // }))

    return (
        <Container>
            <BackgroundImage />
          
            <div className="content ">
                <Header />
                <div className="form-wrapper flex j-center a-center">
                    <div className="form flex column">
                        <h2>Login</h2>
                        <h3  style={{color:'red'}} >{error}</h3>
                        <input 
                        type="text"
                        name="email" 
                        placeholder="Enter email here"
                        onChange={(e)=>{
                            setFormVal({...formVal,email:e.target.value})
                        }}
                        />
                        <input 
                        type="password" 
                        name="password" 
                        placeholder="password"
                        onChange={(e)=>{
                            setFormVal({...formVal,password:e.target.value})
                        }} 
                        />
                        {loading?(
                        <span class="loader"></span>
                        
                        ):<button onClick={loginHelper}>Login</button>}
                        
                    </div>
                    
                </div>
            </div>
        </Container>

    )
}
export default Login

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
     
    .form{
        padding:60px 50px;
        background-color: rgba(0,0,0,0.7);
        gap: 30px;
        h2{
            text-align: center;
        }
        input{
            padding: 10px;
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
  }
`;