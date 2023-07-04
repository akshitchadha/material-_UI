import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material';
const Typography_component = () => {

   const[Name,setName]=useState("");




    return (<div>

        {/* <Typography variant= "h1">

            Hello World

         </Typography> */}


        <Button    sx={{margin :3}} color='success' size='large' variant='contained'
            onClick={() => { alert("this is contained button with size large") }} >First</Button>
        <Button  sx={{margin :3}} color="warning" size="medium" variant='outlined'
            onClick={() => { alert("this is outlined button with size medium") }}>Second</Button>
        <Button sx={{margin :3}} color="info" size="small" variant='text'
            onClick={() => { alert("this is text button with size small") }}>Third</Button>


     <TextField value={Name}   onChange={(e)=>{setName(e.target.value)}} type = {'text'} sx={{ margin : 3 }}  placeholder='standard' variant='standard'></TextField>

     <TextField  type = {'password'} sx={{ margin : 3 }}  placeholder= "filled" variant='filled'></TextField>

     <TextField  type = {'email'} sx={{ margin : 3 }} placeholder= "outlined" variant='outlined'></TextField>



     <Typography variant='h1'>{Name} </Typography>
             </div>);
}


export default Typography_component;