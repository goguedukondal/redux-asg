import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setChanger } from './slice'
const Button = () => {
    const isLight = useSelector(state => state.changer);
  //console.log(isLight===true);
  const dispatch = useDispatch();
  const changeTheme=()=>{
 
    if(isLight === "true"){
    dispatch(setChanger("false"))
   
    

    }
    else{
      //const data2 = true;
    dispatch(setChanger("true"));
    }
  }

  return (
    <button className="btn" onClick={()=>changeTheme()}>Toggle Theme to {isLight==="true"?"Dark":"Light"}</button>

  )
}

export default Button