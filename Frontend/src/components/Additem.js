import { Box, FormLabel, TextField, } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

import "./Additem.css"
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    price: '',
    catagory: '',
    available: false,
    image: '',


  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,

    }))
  };
  const sendRequest = async () => {
   await axios.post('http://localhost:5000/books', {
      name:String( inputs.name),
      author: String(inputs.catagory),
      description: String(inputs.description),
      price: Number(inputs.price),
      image: String(inputs.image),
      available: Boolean(checked),
    }).then(res=> res.data);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs,checked);
    sendRequest().then(()=>history('/products'))
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" 
      flexDirection="column" 
      justifyContent={'center'}
       maxWidth={700}
       alignContent={"center"}
       alignSelf="center"
       marginLeft={"auto"}
       marginRight="auto"
       marginTop={10}

       >
      <FormLabel>Name</FormLabel>
      <TextField value={inputs.name} 
      onChange={handleChange} 
      margin='normal' l
      abel='Name' 
      variant='outlined' name='name' />
      <FormLabel>Catagory</FormLabel>
      <TextField 
      value={inputs.catagory} 
      onChange={handleChange}
      margin='normal' 
      label='Catagory' 
      variant='outlined' 
      name='catagory' />
      <FormLabel>Description</FormLabel>
      <TextField 
      value={inputs.description} 
      onChange={handleChange} 
      margin='normal'
       label='Description' 
       variant='outlined' 
       name='description' />
      <FormLabel>price</FormLabel>
      <TextField 
      value={inputs.price}
       onChange={handleChange}
      type='number'
      margin='normal' label='Price' variant='outlined' name='price' />
      <FormLabel>Image</FormLabel>

      <TextField 
      value={inputs.image} onChange={handleChange}
      margin='normal' variant='outlined' name='image' />

{/* <Button variant="contained" component="label" value={inputs.image} onChange={handleChange}>
  Upload
  <input hidden accept="image/*" multiple type="file" />
</Button> */}

      <FormControlLabel
      control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)}/>} 
      label="Available" />


      <button class = "button" variant="contained" type='submit'>Add Product</button>
      </Box>
    
      </form>
  )
}

export default Add
