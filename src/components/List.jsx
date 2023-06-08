import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import ListItem from "./ListItem"
import { useRef } from "react"
const List=()=>{
    const listRef = useRef();

    const handleClick = (direction) => {
    
      let distance=listRef.current.getBoundingClientRect().x-50  
      if(direction=='left'){
        listRef.current.style.transform = `translateX(${250+distance}px`;
      }
      if(direction=='right'){
        listRef.current.style.transform = `translateX(${-250+distance}px`;
      }
      console.log(distance);
    };
    return(
     <div className="list">
        <span className="list-title">Continew To Watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined className="arrow left" onClick={()=>handleClick('left')}  />
            <div ref={listRef} className="container-list">
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>

            </div>
            <ArrowForwardIosOutlined className="arrow right" onClick={()=>handleClick('right')}/>
        </div>
     </div>   
    )
}

export default List
