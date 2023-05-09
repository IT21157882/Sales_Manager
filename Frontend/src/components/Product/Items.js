import React, { useEffect, useState } from "react";
import "./Item.css";
import axios from "axios";
import Item from "./Item";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import ItemPDF from "./ItemPDF";
import backgroundImage from "../images/tae.jpg";
import { Box, FormLabel, TextField } from "@mui/material";

const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const CustomizedInputBase = (props) => {
  return (
    <div>
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Tea Product."
        inputProps={{ "aria-label": "search events" }}
        value={props.keyword}
        onChange={props.handleKeywordChange}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
    </Paper>
    </div>
  );
};

const Items = () => {
  const [items, setItems] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetchHandler().then((data) => setItems(data.books));
  }, []);

  // Search Functionality
  let searchResult;
  if (keyword === "") {
    searchResult = items.map((x) => x);
  } else {
    searchResult = items.filter((event) => {
      const re = new RegExp(`${keyword}`, "i");
      console.log(event.author.match(re));
      if (event.author.match(re) === null) {
        return false;
      } else {
        return true;
      }
    });
  }

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log(items);

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
      <br></br><br></br>
      <h1><center>Tea Products List</center></h1>
      <br></br><br></br>
      <center>
      <div className="justify-center flex mt-5">
        <CustomizedInputBase
          keyword={keyword}
          handleKeywordChange={handleKeywordChange}
        />
      </div>
      </center>
      <br></br><br></br>

      <Box style={{ backgroundColor: 'white'}}
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        // maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        
      >

      <ul type="none" >
        {searchResult &&
          searchResult.map((item, i) => (
            <li className="book" key={i} >
              <Item book={item} />
            </li>
          ))}
      </ul>
      {/* <Button color="secondary" variant="contained">
        Export All Event Details
      </Button> */}
      <br></br><br></br>
      <center >
        <ItemPDF tableData={searchResult} />
      </center>
      <br></br>
      </Box>
      
      </div>
    
  );
};

export default Items;
