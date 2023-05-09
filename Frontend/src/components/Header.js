import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom'
import myImage from "../components/images/logo.png";


const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{backgroundColor: "#232F3d"}} position="sticky">
        <Toolbar>
          <NavLink to="/" sx={{color:"white"}}>
        <Typography>
        <img src={myImage} alt="Image description" height={80} width={80}/>
            {/* <LibraryBooksIcon/> */}
            </Typography></NavLink>
            <Tabs  
                 sx={{ml: 'auto'}}
            
            
            textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={NavLink} to="/add" label="Add Product" />
                <Tab LinkComponent={NavLink} to="/products" label="Products" />
                <Tab LinkComponent={NavLink} to="/report" label="report" />
                <Tab LinkComponent={NavLink} to="/chart" label="chart" />
                <Tab LinkComponent={NavLink} to="/about" label="About Us" />
            </Tabs>
            </Toolbar>      
        
         </AppBar>
    </div>
  )
};

export default Header
