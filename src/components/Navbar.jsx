import styled from "styled-components"
import logo from "../assets/logo.png"
import { Search ,Notifications,ArrowDropDown} from "@material-ui/icons"
import { useState } from "react";
 


const Navbar = () => {

    console.log(window.pageYOffset);
    let [isScroll,setIsScroll]=useState(false)
    window.onscroll=()=>{
        setIsScroll(window.pageYOffset==0?false:true)
        return window.onscroll==null
    }

    return (
        <Nav className={isScroll==true&&''}>
            
            <div className={`${isScroll==true?'scroll':''} container`}>
                <div className="left">
                    <img src={logo} alt="logo" />

                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>

                </div>
                <div className="right">
                    <Search className="icon"/> 
                    <span>KIDS</span>
                    <Notifications className="icon" />
                    <div className="profile">
                        <ArrowDropDown className="icon iconArrow" />
                        <div className="options">
                            <span>Profile</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </Nav>
    )
}

export default Navbar

const Nav = styled.div`
    display: flex;
    width: 100%;
    /* background-color: black; */
    color: white;
    height: 70px;
    position: fixed;
    z-index: 999;
    top: 0;
    background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.5) 50%);
    padding: 0 50px;
    .scroll{
        background-color: black;
        transition: 1s;
    }
    .container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
            display: flex;
            align-items: center;
            img{
                width: 170px;
                margin: 0 20px;
            }
            span{
                margin: 0 20px;
            }
        }
        .right{
            display: flex;
            justify-content: space-around;
            align-items: center;
            .icon{
                margin: 0 15px;
                cursor: pointer;
            }
            .profile{
                
                .options{
                    display: none;
                    flex-direction: column;
                    background-color: black;
                    padding: 15px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

                }
                &:hover{
                    .options{
                        display: flex;
                        position: absolute;
                    }
                    .iconArrow{
                        margin: 0 15px;
                        cursor: pointer;
                        transform: scale(1.5);
                    }
                }
            }
        }
    }
`