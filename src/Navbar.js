import React from 'react'
import {Link} from 'react-router-dom';



const Navbar = () => {
  return (
    <div>
        
        
            <Link to="/"><p>Home</p></Link>
            <Link to="/contact"><p>Contact</p></Link>
            <Link to="/service"><p>Service</p></Link> 
           

       
        

    </div>
  )
}

export default Navbar;